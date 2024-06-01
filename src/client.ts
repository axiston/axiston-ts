import { ClientConfig, type AxistonClientOptions } from "./config";

/**
 * A minimal `Axiston` client.
 *
 * @link https://www.axiston.com/
 */
export class AxistonClient {
	readonly #config: ClientConfig;

	/**
	 * Constructs a new `Axiston` client.
	 *
	 * @param options Client options, override environment variables.
	 *
	 * @link https://www.axiston.com/
	 */
	constructor(options?: AxistonClientOptions) {
		this.#config = new ClientConfig(options);
	}

	/**
	 * Returns the provided `API key`.
	 */
	get apiKey(): string {
		return this.#config.apiKey;
	}

	/**
	 * Returns the used base `URL`.
	 */
	get baseUrl(): URL {
		return this.#config.baseUrl;
	}

	/**
	 * Returns the used `User-Agent` header value.
	 */
	get userAgent(): string {
		return this.#config.userAgent;
	}

	/**
	 * Returns if the service is healthy. Throws otherwise.
	 *
	 * @throws AxistonError
	 */
	async health(): Promise<void> {
		throw new Error("not implemented.");
	}
}
