"use strict";

var sleep = timeout => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`I was sleeping ${timeout} ms`);
      resolve();
    }, timeout);
  });
};

var error = timeout => {
  setTimeout(() => {
    throw new Error("BOOM!!!");
  }, timeout);
};

describe("scope", () => {
  it("test #1", async () => {
    error(1000);
    await sleep(1000);
  });
  it("test #2", async () => await sleep(1000));
  it("test #3", async () => {
    error(1000);
    await sleep(1000);
  });
  it("test #4", async () => await sleep(1000));
  it("test #5", async () => await sleep(1000));
  it("test #6", async () => await sleep(1000));
});