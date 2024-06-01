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
 * Options for {@link AxistonClient }.
 *
 * Overrides environment variables.
 */
export interface AxistonClientOptions {
	/**
	 * Attaches an `API key`.
	 *
	 * Overrides environment variable `AXISTON_API_KEY`.
	 */
	apiKey?: string;

	/**
	 * Overrides default `base url`: `https://api.axiston.com`
	 * or environment variable `AXISTON_BASE_URL`.
	 */
	baseUrl?: string | URL;

	/**
	 * Overrides default `User-Agent` header: `Axiston/0.1.0 (TS; Ver. 16.0)`
	 * or environment variable `AXISTON_USER_AGENT`.
	 */
	userAgent?: string;
}

const baseUrl = "https://api.axiston.com";
const userAgent = `Axiston/${clientVersion} (TS; Ver. ${runtimeVersion})`;

/**
 * Attempts to construct {@link AxistonClientOptions} from environment variables.
 *
 * Returns default {@link AxistonClientOptions} otherwise.
 */
export function tryEnvironment(): Required<AxistonClientOptions> {
	const options: Required<AxistonClientOptions> = {
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
	 * Instantiates a new {@link ClientConfig} with provided options.
	 */
	constructor(options?: AxistonClientOptions) {
		const env = tryEnvironment();
		this.apiKey = options?.apiKey || env.apiKey;
		this.baseUrl = new URL(options?.baseUrl || env.baseUrl);
		this.userAgent = options?.userAgent || env.userAgent;
	}

	/**
	 * TODO.
	 *
	 * @throws AxistonError
	 */
	async send<T = unknown>(body: unknown): Promise<T> {
		throw new Error("not implemented.");
	}
}
