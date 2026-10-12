import { generateLlmsTxt } from "@/lib/llms/generate";

/** /llms.txt generated from the content registry at build time. */
export function GET() {
  return new Response(generateLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
