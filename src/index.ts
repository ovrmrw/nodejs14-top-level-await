import { sleep } from "./utils.js";

console.log(process.env);
const start = Date.now();
const delay = 5000;
await sleep(delay);
const actualDelay = Date.now() - start;
console.log(`Hello after ${actualDelay} ms`);
