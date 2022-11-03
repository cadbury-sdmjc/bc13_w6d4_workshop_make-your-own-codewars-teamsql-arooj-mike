/* 
👉 Write your kata here!

Karen is over for dinner! What's her favourite meal? As top tier programmers
we keep our friend's favourite meals in an array of objects! Better go 
do programming things to find the favouritemeal!

v. 2
Oh gosh! We made too much of Karen’s favourite meal!
Who else loves it so much we could invite them too??
*/

import { people } from "./friendslist.js";

export function findTheMeal(people) {
  for (let i = 0; i < people.length; i++)
    if (people[i].name == "Karen") {
      findThePeople(people[i].favouritemeal);
      return people[i].favouritemeal;
    }
}

export function findThePeople() {
  let selectedPeople = [];
  for (let i = 0; i < people.length; i++)
    if (people[i].favouritemeal == "unsalted chicken, unpaid") {
      selectedPeople.push(people[i].name);
      console.log("hello my name is dave" + selectedPeople);
    }
  return selectedPeople;
}
