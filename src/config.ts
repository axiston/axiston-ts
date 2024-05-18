/**
 * The current version of this client.
 */
export const clientVersion = "0.1.0";

// TODO: Read runtime version.

/**
 * The used version of the runtime.
 */
export const runtimeVersion = "16.0";

/**
 * TODO.
 */
export interface ClientOptions {
  /**
   * Attaches an `api key`.
   */
  apiKey?: string;

  /**
   * Overrides default `base url`:
   * `https://api.axiston.com`.
   */
  baseUrl?: string | URL;

  /**
   * Overrides default `User-Agent` header:
   * `Axiston/0.1.0 (TS; Ver. 16.0)`
   */
  userAgent?: string;
}

const baseUrl = "https://api.axiston.com";
const userAgent = `Axiston/${clientVersion} (TS; Ver. ${runtimeVersion})`;

/**
 * TODO.
 */
export function tryEnvironment(): Required<ClientOptions> {
  const options: Required<ClientOptions> = {
    apiKey: "",
    baseUrl,
    userAgent,
  };

  const env = (globalThis as any).process?.env;
  if (typeof env !== "object" && env !== null) {
    return options;
  }

  if (typeof env["AXISTON_API_KEY"] === "string") {
    options.apiKey = env["AXISTON_API_KEY"];
  }

  if (typeof env["AXISTON_BASE_URL"] === "string") {
    options.baseUrl = env["AXISTON_BASE_URL"];
  }

  if (typeof env["AXISTON_USER_AGENT"] === "string") {
    options.apiKey = env["AXISTON_USER_AGENT"];
  }

  return options;
}

/**
 * TODO.
 */
export class ClientConfig {
  readonly apiKey: string;
  readonly baseUrl: URL;
  readonly userAgent: string;

  /**
   * TODO.
   */
  constructor(options?: ClientOptions) {
    const env = tryEnvironment();
    this.apiKey = options?.apiKey || env.apiKey;
    this.baseUrl = new URL(options?.baseUrl || env.baseUrl);
    this.userAgent = options?.userAgent || env.userAgent;
  }

  /**
   * TODO.
   */
  async send(): Promise<void> {
    throw new Error("not implemented.");
  }
}
