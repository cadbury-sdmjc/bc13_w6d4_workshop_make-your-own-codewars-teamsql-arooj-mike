//👉 Write your tests below here:
import { findTheMeal } from "./main.js"; 
import { people } from "./main.js"
import { test, expect } from "@jest/globals";

test('correct order', ()=> {
    const actual = findTheMeal(people)
    const expected = 'spotted dick'
    expect(actual).toBe(expected);
});

// test('correct meal', ()=> {

    
// });

// test('correct name', ()=> {

    
// });