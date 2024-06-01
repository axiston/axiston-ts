import { describe, it } from "node:test";
import { ok } from "node:assert";
import { AxistonClient } from "./client";

describe("client", () => {
	it("should be constructable without options", () => {
		const client = new AxistonClient();

		ok(client.baseUrl);
		ok(client.userAgent);
	});

	it("should be constructable with options", () => {
		const client = new AxistonClient({
			apiKey: "testing",
			userAgent: "Einstack/1.0",
		});

		ok(client.baseUrl);
		ok(client.apiKey);
		ok(client.userAgent);
	});

	it("should be healthy", async () => {
		const client = new AxistonClient();
		await client.health();
	});
});
