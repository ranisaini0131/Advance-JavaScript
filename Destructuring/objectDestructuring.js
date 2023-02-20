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

    orderDelivery: function (time, address, mainIndex, staterIndex) {
        console.log(`Order recieved! ${this.staterIndex} and ${this.mainMenu} will be delivered to ${address} at ${time}`);
    }
};

restaurant.orderDelivery({
    time: "22.30",
    address: "hdh hfjdhf jj",
    mainIndex: 2,
    staterIndex: 2
});

//destructuring objects:-
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//different name of object
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;

console.log(restaurantName, hours, tags);

//default value for not defined objects
//menu without [] is undefined, we are assigning empty array to it 

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

//Mutating variable
let a = 11;
let b = 67;

const obj = { a: 45, b: 66, c: 5, };

//to update the values of a and b
({ a, b } = obj);
console.log(a, b);


//nested object
const {
    fri: { open: o, close: c },
} = openingHours;
console.log(open, close);
console.log(o, c);
