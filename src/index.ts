import { tryCatch, tryCatchSync } from "./utils/try-catch";

const asyncFunction = async () => {
	const value = Math.random();
	if (value > 0.8) throw new Error("too large");
	return value;
};

const syncFunction = () => {
	const value = Math.random();
	if (value > 0.8) throw new Error("too large");
	return value;
};

const asyncDemo = async () => {
	const { data, error } = await tryCatch(asyncFunction());
	if (error) return console.error("Async Demo - Error");
	console.log("Async Demo - Success:", data);
};

const syncDemo = () => {
	const { data, error } = tryCatchSync(syncFunction);
	if (error) return console.error("Sync Demo - Error");
	console.log("Sync Demo - Success:", data);
};

asyncDemo(); // run the async demo
syncDemo(); // run the sync demo
