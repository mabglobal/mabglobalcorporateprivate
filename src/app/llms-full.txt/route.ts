import { generateLlmsFullTxt } from "@/lib/llms/generate";

/** /llms-full.txt, a plain-text version of published service and sector content. */
export function GET() {
  return new Response(generateLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
