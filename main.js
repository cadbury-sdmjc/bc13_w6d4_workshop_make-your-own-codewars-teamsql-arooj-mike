/* 
👉 Write your kata here!

Karen is over for dinner! What's her favourite meal? As top tier programmers
we keep our friend's favourite meals in an array of objects! Better go 
do programming things to find the favouritemeal!

v. 2
v. 2
Oh gosh! We made too much of Karen’s favourite meal!
We need a list of all people who like the same thing, including her!!
hint: this requires a chained function; one function calls the other
*/

import { people } from "./friendslist.js";

export function findTheMeal() {
  return people.filter((p) => p.name === "Karen")[0].favouritemeal;
}

export function findThePeople() {
  return people.filter((p) => p.favouritemeal === findTheMeal()).map((p) => p.name);
}
