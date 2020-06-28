export { someAsyncTask };

function someAsyncTask(delay: number) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        causeErrorSometimes();
        resolve();
      } catch (e) {
        reject(e);
      }
    }, delay)
  );
}

function causeErrorSometimes() {
  if (Math.random() < 0.5) {
    throw new Error("Intentional Error");
  }
}
