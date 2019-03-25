
'use strict';

let arr = [1,2,3,4,5,6,7,8,9,10];

//for loop
const forLoop = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    console.log('array value (for): ', arr[i]);
  };
  return;
};

forLoop(arr);

//while loop
let i = 0;
const whileLoop = (arr) => {
  while(i < arr.length) {
    i++;
    console.log('array value (while): ', i);
  };
  return;
};

whileLoop(arr);

//reduce();

//filter();

//map();

//Objects
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
};

//newPeople
let newPeople = ['Odie', ...people, 'Garfield'];
console.log('newPeople array: ', newPeople);

//newStuff
let {cars} = stuff;
console.log('cars: ', ...cars);
cars.push('malebu');
let newStuff = stuff;
stuff.cars = (cars);
console.log('newStuff: ', newStuff);


let state = {};

let newState = {};