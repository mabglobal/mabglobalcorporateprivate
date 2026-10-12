"use client";

import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { contactConfig, mailtoHref } from "@/config/contact";
import { routes } from "@/config/routes";
import type { ContactResponseBody } from "@/lib/contact/handle-contact-request";
import {
  contactLimits,
  type ContactField,
  type ContactFieldErrors,
  type ContactOptions,
} from "@/lib/validation/contact-limits";
import type { ContactValidationResult } from "@/lib/validation/contact";
import { cn } from "@/lib/utilities/cn";

type Status = "idle" | "submitting" | "success" | "error";

type FormValues = Record<ContactField, string>;

const emptyValues: FormValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  sector: "",
  message: "",
};

const fieldOrder: ContactField[] = ["name", "email", "company", "service", "sector", "message"];

const genericError = `Talebiniz şu anda gönderilemedi. Lütfen daha sonra tekrar deneyin veya ${contactConfig.email} adresine e-posta gönderin.`;

const inputClasses =
  "block w-full rounded-control border bg-white px-4 text-body text-ink transition-colors placeholder:text-muted focus:border-navy focus:outline-2 focus:outline-offset-0 focus:outline-navy";

function newSubmissionId(): string {
  return crypto.randomUUID();
}

type Validator = (input: unknown) => ContactValidationResult;

/**
 * The shared validation schema is loaded on first interaction so pages that
 * merely link to the contact page never download the validation library.
 */
function useLazyValidator(options: ContactOptions) {
  const validator = useRef<Promise<Validator> | null>(null);
  return function load(): Promise<Validator> {
    validator.current ??= import("@/lib/validation/contact").then((module) =>
      module.createContactValidator(options),
    );
    return validator.current;
  };
}

export function ContactForm({ options }: { options: ContactOptions }) {
  const formId = useId();
  const loadValidator = useLazyValidator(options);
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const startedAt = useRef(0);
  const submissionId = useRef("");
  const fieldRefs = useRef<Partial<Record<ContactField, HTMLElement | null>>>({});
  const successRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    submissionId.current = newSubmissionId();
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
    if (status === "error") errorRef.current?.focus();
  }, [status]);

  const fieldId = (field: ContactField) => `${formId}-${field}`;
  const errorId = (field: ContactField) => `${formId}-${field}-error`;

  function update(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function focusFirstError(fieldErrors: ContactFieldErrors) {
    const first = fieldOrder.find((field) => fieldErrors[field]);
    if (first) fieldRefs.current[first]?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const honeypot = new FormData(event.currentTarget).get("website");
    const validateContact = await loadValidator();
    const validation = validateContact(values);
    if (!validation.success) {
      setErrors(validation.fieldErrors);
      setStatus("idle");
      focusFirstError(validation.fieldErrors);
      return;
    }

    setErrors({});
    setErrorMessage("");
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          values,
          meta: {
            website: typeof honeypot === "string" ? honeypot : "",
            elapsedMs: Date.now() - startedAt.current,
            submissionId: submissionId.current,
          },
        }),
      });
      const body = (await response.json().catch(() => null)) as ContactResponseBody | null;

      if (response.ok && body?.ok === true) {
        setStatus("success");
        setValues(emptyValues);
        submissionId.current = newSubmissionId();
        return;
      }

      if (body && body.ok === false) {
        if (body.fieldErrors) {
          setErrors(body.fieldErrors);
          focusFirstError(body.fieldErrors);
        }
        setErrorMessage(body.message);
      } else {
        setErrorMessage(genericError);
      }
      setStatus("error");
    } catch {
      setErrorMessage(genericError);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="frame rounded-card p-8 md:p-10">
        <CircleCheck aria-hidden="true" className="size-8 text-navy" strokeWidth={1.6} />
        <h3 ref={successRef} tabIndex={-1} className="mt-6 text-title text-navy focus:outline-none">
          Talebiniz bize ulaştı.
        </h3>
        <p className="mt-4 text-body text-slate">
          Ekibimiz talebinizi inceleyip e-posta adresiniz üzerinden sizinle iletişime geçecek.
        </p>
        <button
          type="button"
          onClick={() => {
            startedAt.current = Date.now();
            setStatus("idle");
          }}
          className="mt-8 inline-flex min-h-11 items-center text-label font-medium text-navy underline underline-offset-4"
        >
          Yeni bir talep gönderin
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onFocus={() => void loadValidator()}
      aria-describedby={`${formId}-note`}
      className="frame rounded-card p-6 sm:p-8 md:p-10"
    >
      {status === "error" && errorMessage ? (
        <div
          ref={errorRef}
          role="alert"
          tabIndex={-1}
          className="mb-8 flex gap-3 rounded-panel border border-accent-strong/40 bg-white p-4 text-label text-ink focus:outline-none"
        >
          <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-strong" />
          <p>
            {errorMessage}{" "}
            <a href={mailtoHref} className="font-medium text-navy underline underline-offset-4">
              E-posta gönderin
            </a>
          </p>
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <Field
          id={fieldId("name")}
          errorId={errorId("name")}
          label="Ad Soyad"
          error={errors.name}
          required
        >
          <input
            ref={(node) => {
              fieldRefs.current.name = node;
            }}
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={contactLimits.nameMax}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? errorId("name") : undefined}
            className={cn(inputClasses, "h-12", errors.name ? "border-accent-strong" : "border-line")}
          />
        </Field>

        <Field
          id={fieldId("email")}
          errorId={errorId("email")}
          label="E-posta Adresi"
          error={errors.email}
          required
        >
          <input
            ref={(node) => {
              fieldRefs.current.email = node;
            }}
            id={fieldId("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={contactLimits.emailMax}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? errorId("email") : undefined}
            className={cn(inputClasses, "h-12", errors.email ? "border-accent-strong" : "border-line")}
          />
        </Field>

        <Field
          id={fieldId("company")}
          errorId={errorId("company")}
          label="Şirket veya Marka Adı"
          hint="İsteğe bağlı"
          error={errors.company}
          className="md:col-span-2"
        >
          <input
            ref={(node) => {
              fieldRefs.current.company = node;
            }}
            id={fieldId("company")}
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={contactLimits.companyMax}
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? errorId("company") : undefined}
            className={cn(inputClasses, "h-12", errors.company ? "border-accent-strong" : "border-line")}
          />
        </Field>

        <Field
          id={fieldId("service")}
          errorId={errorId("service")}
          label="İlgilendiğiniz Hizmet"
          error={errors.service}
          required
        >
          <select
            ref={(node) => {
              fieldRefs.current.service = node;
            }}
            id={fieldId("service")}
            name="service"
            required
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            aria-invalid={errors.service ? true : undefined}
            aria-describedby={errors.service ? errorId("service") : undefined}
            className={cn(inputClasses, "h-12 appearance-auto", errors.service ? "border-accent-strong" : "border-line")}
          >
            <option value="">Seçiniz</option>
            {options.services.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={fieldId("sector")}
          errorId={errorId("sector")}
          label="Faaliyet Alanınız"
          error={errors.sector}
          required
        >
          <select
            ref={(node) => {
              fieldRefs.current.sector = node;
            }}
            id={fieldId("sector")}
            name="sector"
            required
            value={values.sector}
            onChange={(event) => update("sector", event.target.value)}
            aria-invalid={errors.sector ? true : undefined}
            aria-describedby={errors.sector ? errorId("sector") : undefined}
            className={cn(inputClasses, "h-12 appearance-auto", errors.sector ? "border-accent-strong" : "border-line")}
          >
            <option value="">Seçiniz</option>
            {options.sectors.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={fieldId("message")}
          errorId={errorId("message")}
          label="Mesajınız"
          error={errors.message}
          required
          className="md:col-span-2"
          counter={`${values.message.length} / ${contactLimits.messageMax}`}
        >
          <textarea
            ref={(node) => {
              fieldRefs.current.message = node;
            }}
            id={fieldId("message")}
            name="message"
            required
            rows={6}
            maxLength={contactLimits.messageMax}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? errorId("message") : undefined}
            placeholder="İş modelinizi, hedef pazarınızı ve ihtiyacınızı kısaca anlatın."
            className={cn(inputClasses, "py-3", errors.message ? "border-accent-strong" : "border-line")}
          />
        </Field>
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${formId}-website`}>Web siteniz</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p id={`${formId}-note`} className="max-w-md text-caption text-slate">
          Formu göndererek{" "}
          <Link href={routes.kvkk} className="text-navy underline underline-offset-4">
            KVKK Aydınlatma Metni
          </Link>
          &apos;ni okuduğunuzu onaylarsınız.
        </p>
        <button
          type="submit"
          disabled={submitting}
          aria-disabled={submitting}
          data-brand-accent=""
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control bg-accent px-6 text-label font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-wait disabled:opacity-80"
        >
          {submitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
              Lütfen bekleyin
            </>
          ) : (
            "Danışmanlık Talep Edin"
          )}
        </button>
      </div>
      <p aria-live="polite" className="sr-only">
        {submitting ? "Talebiniz gönderilmek üzere, lütfen bekleyin" : ""}
      </p>
    </form>
  );
}

interface FieldProps {
  id: string;
  errorId: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  counter?: string;
  children: React.ReactNode;
}

function Field({ id, errorId, label, hint, error, required, className, counter, children }: FieldProps) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-label font-medium text-navy">
          {label}
          {required ? (
            <span aria-hidden="true" className="ml-1 text-accent-strong">
              *
            </span>
          ) : null}
          {hint ? <span className="ml-2 font-normal text-slate">{hint}</span> : null}
        </label>
        {counter ? (
          <span aria-hidden="true" className="text-caption text-slate">
            {counter}
          </span>
        ) : null}
      </div>
      {children}
      {error ? (
        <p id={errorId} className="mt-2 flex items-center gap-1.5 text-caption text-accent-strong">
          <CircleAlert aria-hidden="true" className="size-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
