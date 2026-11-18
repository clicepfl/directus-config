/** Get the environment variable with the given name, or null if it's not set. */
function getEnvNullable(name: string): string | null {
  return typeof process.env[name] === "string" ? process.env[name] : null;
}
/** Get the environment variable with the given name, or throw an error if it's not set. */
function getEnv(name: string): string {
  if (!(name in process.env)) {
    throw Error(`Missing env ${name}`);
  }

  return getEnvNullable(name)!;
}

export const ENVS = {
  logLevel: getEnvNullable("LOG_LEVEL") || "info",

  port: parseInt(getEnvNullable("PORT") || "3000"),

  directusUrl: getEnv("DIRECTUS_URL")!,
  directusToken: getEnvNullable("DIRECTUS_TOKEN"),
  directusAgentBase:
    getEnvNullable(" DIRECTUS_AGENT_BASE") || "directus-flows-",
  directusAgentTtl: parseInt(getEnvNullable(" DIRECTUS_AGENT_TTL") || "5"),

  smtp: {
    host: getEnv("SMTP_HOST"),
    port: parseInt(getEnvNullable("SMTP_PORT") || "587"),
    secure: getEnvNullable("SMTP_SECURE") !== "false",
    user: getEnv("SMTP_USER"),
    password: getEnv("SMTP_PASSWORD"),
    from: getEnv("SMTP_FROM"),
  },
};
