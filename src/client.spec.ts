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
		});

		ok(client.baseUrl);
		ok(client.userAgent);
		ok(client.apiKey);
	});

	it("should be healthy", async () => {
		const client = new AxistonClient();
		await client.health();
	});

	it("should be able to use events service", () => {
		const client = new AxistonClient();
		ok(client.events);
	});

	it("should be able to use flows service", () => {
		const client = new AxistonClient();
		ok(client.flows);
	});

	it("should be able to use hooks service", () => {
		const client = new AxistonClient();
		ok(client.hooks);
	});
});
