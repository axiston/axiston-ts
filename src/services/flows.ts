import { ClientConfig } from "../config";
import type { Flow } from "../typings/flows"

/**
 * APIs for `/v1/flows` endpoints.
 */
export interface Flows {}

/**
 * Implementation of a {@link Flows} service.
 */
export class FlowsService implements Flows {
	readonly #config: ClientConfig;

	/**
	 * TODO.
	 */
	constructor(config: ClientConfig) {
		this.#config = config;
	}
}
