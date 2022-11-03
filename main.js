
// bunch of data got muddled up
// [{id:32843809742, name: bob, favouritemeal: toad in the hole but with banana not sausage}, ]
// get the third name when ordered by ID and tell us just the favourite meal
// return (array, name of meal)
// */

export const people = [
    {name: "bob", favouritemeal: "toad in the hole" },
    {name: "dave", favouritemeal: "full english" },
    {name: "barrack", favouritemeal: "cheeseburger" },
    {name: "johnny", favouritemeal: "spotted dick" },
    {name: "karen", favouritemeal: "unsalted chicken, unpaid" },
    {name: "chad", favouritemeal: "protein suppliments" },
    {name: "robbie", favouritemeal: "edibles" },
    {name: "cher", favouritemeal: "fake garlic" },
    {name: "posh spice", favouritemeal: "salad" },
    {name: "rihanna", favouritemeal: "eggs for breakfast" },
    {name: "david", favouritemeal: "jacket potato" },
    {name: "jordan", favouritemeal: "mars bars" },
    {name: "liz", favouritemeal: "broccoli and brie pie" },
    {name: "arshi", favouritemeal: "steak?" },
    {name: "loz", favouritemeal: "jam sandwich" },
    {name: "charlotte", favouritemeal: "pizza" },
    {name: "helen", favouritemeal: "css files" },
    {name: "chris", favouritemeal: "KFC" },
    {name: "mum", favouritemeal: "sunday roast" },
    {name: "mr. sainsbury", favouritemeal: "pound coins" },
  ];

  // console.log(people)

  export function findTheMeal(people){
    console.log("here is console log" + people)
    for (let i=0; i<people.length; i++)
        if (people[i].name == "johnny") {
            return people[i].favouritemeal
        } 
  }