import { ClientConfig, type AxistonClientOptions } from "./config";
import { type Events, EventsService } from "./services/events";
import { Hooks, HooksService } from "./services/hooks";
import { Flows, FlowsService } from "./services/flows";

/**
 * A minimal `Axiston` client.
 *
 * @link https://www.axiston.com/
 */
export class AxistonClient {
	readonly #config: ClientConfig;
	readonly #events: EventsService;
	readonly #flows: FlowsService;
	readonly #hooks: HooksService;

	/**
	 * Constructs a new `Axiston` client.
	 *
	 * @param options Client options, override environment variables.
	 *
	 * @link https://www.axiston.com/
	 */
	constructor(options?: AxistonClientOptions) {
		this.#config = new ClientConfig(options);
		this.#events = new EventsService(this.#config);
		this.#flows = new FlowsService(this.#config);
		this.#hooks = new HooksService(this.#config);
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
		await this.#config.send("GET", "/health");
	}

	/**
	 * APIs for `/v1/events` endpoints.
	 */
	get events(): Events {
		return this.#events;
	}

	/**
	 * APIs for `/v1/flows` endpoints.
	 */
	get flows(): Flows {
		return this.#flows;
	}

	/**
	 * APIs for `/v1/hooks` endpoints.
	 */
	get hooks(): Hooks {
		return this.#hooks;
	}
}
