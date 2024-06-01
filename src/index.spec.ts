import { describe, it } from "node:test";
import type { AxistonClientOptions } from "./index";
import { AxistonClient, AxistonError } from "./index";

describe("index", () => {
	it("should re-export everything", async () => {
		const options: AxistonClientOptions = {
			apiKey: "1234567890",
		};

		const client = new AxistonClient(options);
		try {
			await client.health();
		} catch (error: unknown) {
			if (error instanceof AxistonError) {
				console.error(`${error.kind}: ${error.message}`);
			} else if (error instanceof Error) {
				console.error(`${error.name}: ${error.message}`);
			}
		}
	});
});
