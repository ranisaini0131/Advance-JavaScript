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
};

// //destructuring
// const [x, y, z, r, t, u] = restaurant.categories;
// console.log(x, y, z, r, t, u);



// //skipped the element
// const [a, , d] = restaurant.categories;
// console.log(a, d);


//interchanging the elements:=

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// 1.normal
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);


//interchanging by destructuring:-
[main, secondary] = [secondary, main];
console.log(main, secondary);

//receivetwo return values fromorder function
// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring:-
const nested = [2, 4, [5, 6]];
let [a, b, [c, t]] = nested;
console.log(a, b, [c, t]);
[a, , [c, t]] = nested
console.log(a, c, t);


//default values:-

let [p = 1, y = 1, q = 1] = [5, 7];
console.log(p, y, q);