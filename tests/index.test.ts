import { describe, expect, it } from "bun:test";
import { tryCatch, tryCatchSync } from "../src/utils/try-catch";

const throwError = (error: Error) => {
	throw error;
};

describe("tryCatch", () => {
	it("should return null error and data when the promise is resolved", async () => {
		const result = await tryCatch(Promise.resolve(42));
		expect(result.error).toBeNull();
		expect(result.data).toBe(42);
	});

	it("should return the error and null data when the promise is rejected", async () => {
		const error = new Error("something went wrong");
		const result = await tryCatch(Promise.reject(error));
		expect(result.error).toEqual(error);
		expect(result.data).toBeNull();
	});
});

describe("tryCatchSync", () => {
	it("should return null error and data when the function is executed", () => {
		const result = tryCatchSync(() => 42);
		expect(result.error).toBeNull();
		expect(result.data).toBe(42);
	});

	it("should return the error and null data when the function throws an error", () => {
		const error = new Error("something went wrong");
		const result = tryCatchSync(() => throwError(error));
		expect(result.error).toEqual(error);
		expect(result.data).toBeNull();
	});
});
