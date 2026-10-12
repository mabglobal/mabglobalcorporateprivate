/** Builds a complete ProcessEnv fixture for functions that read environment variables. */
export function testEnv(vars: Record<string, string>): NodeJS.ProcessEnv {
  return { NODE_ENV: "test", ...vars } as NodeJS.ProcessEnv;
}
