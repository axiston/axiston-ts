import { ClientConfig } from "../config";
import type { Hook } from "../typings/hooks"

/**
 * APIs for `/v1/hooks` endpoints.
 */
export interface Hooks {}

/**
 * Implementation of a {@link Hooks} service.
 */
export class HooksService implements Hooks {
	readonly #config: ClientConfig;

	/**
	 * TODO.
	 */
	constructor(config: ClientConfig) {
		this.#config = config;
	}
}
