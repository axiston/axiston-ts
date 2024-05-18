import { ClientConfig, type ClientOptions } from "./config";

/**
 * A minimal `Axiston` client.
 *
 * @link https://www.axiston.com/
 */
export class Client {
  readonly #config: ClientConfig;

  /**
   * Constructs a new `Axiston` client.
   *
   * @param options Client options, override environment variables.
   *
   * @link https://www.axiston.com/
   */
  constructor(options?: ClientOptions) {
    this.#config = new ClientConfig(options);
  }

  /**
   * Returns the provided `API key`.
   *
   * Use `ClientOption` or environment variable `AXISTON_API_KEY` to override.
   */
  get apiKey(): string {
    return this.#config.apiKey;
  }

  /**
   * Returns the used base `URL`.
   *
   * Use `ClientOption` or environment variable `AXISTON_BASE_URL` to override.
   */
  get baseUrl(): URL {
    return this.#config.baseUrl;
  }

  /**
   * Returns the used `User-Agent` header value.
   *
   * Use `ClientOption` or environment variable `AXISTON_USER_AGENT` to override.
   */
  get userAgent(): string {
    return this.#config.userAgent;
  }

  /**
   * TODO.
   */
  async health(): Promise<void> {
    throw new Error("not implemented.");
  }
}
