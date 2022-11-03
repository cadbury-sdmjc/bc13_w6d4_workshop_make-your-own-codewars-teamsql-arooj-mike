//👉 Write your tests below here:
import { findTheMeal } from "./main.js";
import { people } from "./friendslist.js";
import { test, expect } from "@jest/globals";
import { findThePeople } from "./main.js";

test("check the correct meal is selected", () => {
  const actual = findTheMeal(people);
  const expected = "unsalted chicken, unpaid";
  expect(actual).toBe(expected);
});

test("check the correct two people are returned", () => {
  const actual = findThePeople("Karen");
  const expected = ["Johnny", "Karen"];
  expect(actual).toStrictEqual(expected);
});
