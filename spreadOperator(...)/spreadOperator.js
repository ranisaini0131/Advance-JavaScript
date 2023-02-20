'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (staterIndex, mainIndex) {
        return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]]
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here us your delicious pasta with ${ing1},${ing2}, ${ing3}`);
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

const arr = [4, 6, 8];

//common to add elements in array
const badNewArray = [1, 5, 7, arr[0], arr[1], arr[2]];
console.log(badNewArray);

//by spread Operator
const goodNewArray = [1, 5, 7, ...arr]; //by spred operator it's like taking out of the elements and write down manually
// const goodNewArray = [1, 5, 7, arr];

console.log(goodNewArray);

//whenever we need the elements of array individually
// tjis helps when we need to pass elements of array into functionindividually
console.log(...goodNewArray);


//creating new array by one more item and [] braskted used to for new arrays
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//spreadOperator is bit similar to destructuring becoz it helps us to get elements out of arrays or objects.
//but the difference is that S.O. takes all elements from the array and doesn't create new array


//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//the spread Operator is works on iterables.
//iterables are like all arrays, strings, maps or sets but not objects.
//most of the built-in data strucutre in js are iterables except object.

const str = 'Jonas';
const letter = [...str, ' ', 'S.'];
console.log(letter);
console.log(...str);

//calling orderPasta
//real worls example
const ingrediants = [
    prompt("let's make pasta! Ingrdiaents 1?"),
    prompt("Ingredients 2?"),
    prompt("Ingredients 3?")
];
console.log(ingrediants);

restaurant.orderPasta(...ingrediants);


//==============Objects
// since 2018 , spread operator also works on objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristaurants Roma";

console.log(restaurantCopy.name);
console.log(restaurant.name);

