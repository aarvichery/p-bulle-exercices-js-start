import { jest, beforeEach, describe, expect, test } from "@jest/globals";
import { headsOrTails } from "./heads-or-tails";

describe("pileOuFace", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("retourne une Promise et se résout après 1 seconde", async () => {
    const promise = headsOrTails();

    expect(promise).toBeInstanceOf(Promise);

    let resolved = false;
    promise.then(() => {
      resolved = true;
    });

    // not resolved before a second
    jest.advanceTimersByTime(999);
    await Promise.resolve(); // flush microtasks
    expect(resolved).toBe(false);

    // resolved after 1.5 sec
    jest.advanceTimersByTime(501);
    await Promise.resolve();
    expect(resolved).toBe(true);
  });
});
