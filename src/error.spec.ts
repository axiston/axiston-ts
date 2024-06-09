import { describe, it } from "node:test";
import { AxistonError, type ErrorResponse } from "./error";
import { ok, equal } from "node:assert";

const throwUnknownError = (): never => {
	const response: ErrorResponse = {
		name: "unknown",
		message: "reason",
	};

	throw new AxistonError(response, 500);
};

describe("error", () => {
	it("should be constructable", () => {
		try {
			throwUnknownError();
		} catch (error: unknown) {
			ok(error instanceof Error);
			ok(error instanceof AxistonError);
		}
	});

	it("should include response data", () => {
		try {
			throwUnknownError();
		} catch (error: unknown) {
			ok(error instanceof AxistonError);
			equal(error.kind, "unknown");
			equal(error.message, "reason");
			equal(error.status, 500);
		}
	});
});
