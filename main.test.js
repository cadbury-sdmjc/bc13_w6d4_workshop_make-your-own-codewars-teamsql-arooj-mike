//👉 Write your tests below here:
import { findTheMeal } from "./main.js";
import { people } from "./friendslist.js";
import { test, expect } from "@jest/globals";

test("check the correct meal is selected", () => {
  const actual = findTheMeal(people);
  const expected = "unsalted chicken, unpaid";
  expect(actual).toBe(expected);
});


