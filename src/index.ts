import { someAsyncTask } from "./utils.js";

console.log(process.env);
const start = Date.now();
const delay = 5000;
try {
  await someAsyncTask(delay);
  const actualDelay = Date.now() - start;
  console.log(`Hello after ${actualDelay} ms`);
} catch (e) {
  console.error(e);
  process.exit(1);
}
