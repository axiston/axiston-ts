import { describe, it } from "node:test";
import { ok } from "node:assert";
import { type AxistonClientOptions, tryEnvironment } from "./config";

describe("config", () => {
	it("should return valid options", () => {
		const options: AxistonClientOptions = tryEnvironment();
		ok(options.baseUrl);
		ok(options.userAgent);
	});
});
