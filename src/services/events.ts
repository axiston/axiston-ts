import { ClientConfig } from "../config";
import type { Event } from "../typings/events"

/**
 * APIs for `/v1/events` endpoints.
 */
export interface Events {}

/**
 * Implementation of a {@link Events} service.
 */
export class EventsService implements Events {
	readonly #config: ClientConfig;

	/**
	 * TODO.
	 */
	constructor(config: ClientConfig) {
		this.#config = config;
	}
}
