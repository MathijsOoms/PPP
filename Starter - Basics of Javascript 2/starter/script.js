'use strict';

// let isAvailable = true;
// let inMeeting = true;

// if (inMeeting) isAvailable = false;
// if (isAvailable) console.log('Person is available');
// else console.log('Person is in meeting');

// const public = 'Canada';
// const private = 'room 15';
// const switch = 'open';

//////////// FUNCTIONS ///////////

// function welcomeText() {
//     console.log('Welcome to my page!')
// }

// welcomeText('hello'); //invoking, running, calling
// welcomeText();
// welcomeText();

// function calculator(number1, number2) {
//     console.log(number1, number2);
//     const addition = number1 + number2;
//     const resultText = `${number1} + ${number2} = ${addition}`;

//     return resultText;
// }

// const result1 = calculator(12, 24);
// console.log(result1);

// const result2 = calculator(100, 200);
// console.log(result2);

///////////// DECLARATIONS AND EXPRESSIONS /////////////

// //DECLARATIONS
// function calculateAge1 (birthYear) {
//     const currentYear = 2025;

//     return currentYear - birthYear;
// }

// const age1 = calculateAge1(2004);
// console.log('declaration', age1);

// //EXPRESSIONS
// const calculateAge2 = function (birthYear) {
//     const currentYear = 2025;

//     return currentYear - birthYear;
// };

// const age2 = calculateAge2(2004);
// console.log('expression', age2);

// const calculateAge3 = (birthYear) => 2025 - birthYear;
// const age3 = calculateAge3(2004);
// console.log(age3);

// const leftYearsForLegalAge = (birthYear) => {
//     const currentAge = 2025 - birthYear;
//     const leftYears = 18 - currentAge;

//     // return leftYears
//     return `${name} will be 18 i, ${leftYears} years.`
// }

// const leftYears = leftYearsForLegalAge(2045, 'Michael');
// const leftYears2 = leftYearsForLegalAge(2038, 'John');
// console.log(leftYears);
// console.log(leftYears2);

//////////// FUNCTIONS IN FUNCTIONS /////////////

// function addition(number1, number2) {
//     return number1 + number2;
// }

// function calculator(number1, number2) {
//     console.log(number1, number2);
//     const additionResult = addition(number1 + number2);
//     const resultText = `${number1} + ${number2} = ${additionResult}`;

//     return resultText;
// }

// console.log(calculator(5, 6));

///////// SUMMARY OF FUNCTIONS //////////

// const calculateCurrentAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const leftYearsForLegalAge = function(birthYear, name) {
//     const currentAge = 2025 - birthYear;
//     const leftYears = 18 - currentAge;

//     if (leftYears > 0) {
//         console.log(`${name} will be 18 i, ${leftYears} years.`)
//         return leftYears
//     } else {
//         console.log(`${name} already has a legal age.`)
//         return -1;
//     }
//     // return `${name} will be 18 i, ${leftYears} years.`
// };

// leftYearsForLegalAge(2007, 'Michael');
// leftYearsForLegalAge(2004, 'John');

/////////// ARRAYS ///////////

// const city1 = 'Instanbul'
// const city2 = 'Berlin'
// const city3 = 'London'

// const cities = ['Istanbul', 'Berlin', 'London'];
// console.log(cities);

// const fruits = new Array('Apple', 'Strawberry', 'Lemon', 'Melon');
// console.log(fruits);

// console.log(cities[0]);
// console.log(cities[2]);
// console.log(cities.length);
// console.log(cities[cities.length - 1]);

// cities[2] = 'New York';
// console.log(cities);

// const population = 200000;
// const istanbul = ['Instanbul', 'Turkey', population, cities];

// console.log(istanbul);

// const leftYearsForLegalAge = (birthYear) => {
//     const currentAge = 2025 - birthYear;
//     const leftYears = 18 - currentAge;

//     return leftYears
// }

// const birthDates = [2004, 2007, 1992, 1980, 1960];
// console.log(leftYearsForLegalAge(birthDates));

// const leftYears1 = leftYearsForLegalAge(birthDates[0]);
// const leftYears2 = leftYearsForLegalAge(birthDates[1]);
// const leftYears3 = leftYearsForLegalAge(birthDates[birthDates.length - 1]);

// console.log(leftYears1, leftYears2, leftYears3);

// const leftYearsArray = [leftYears1, leftYears2, leftYears3];
// console.log(leftYearsArray);

//////////// ARRAY METHODS ///////////

// const cities = ['Istanbul', 'Berlin', 'London'];

// // Push method
// const pushedLength = cities.push('Amsterdam');
// console.log(cities);
// console.log(pushedLength);

// // Unshift method
// cities.unshift('Lisbon');
// console.log(cities);

// //Pop method
// cities.pop();
// const removedCity = cities.pop();
// console.log(cities);
// console.log(removedCity);

// //Shift method
// cities.shift();
// console.log(cities);

// console.log(cities.indexOf('Berlin'));
// console.log(cities.indexOf('Paris'));

// //Includes method (ES6)
// console.log(cities.includes('Berlin'));
// console.log(cities.includes('Paris'));
// console.log(cities.includes(100));
// if (cities.includes('Berlin')) {
//     console.log('You visited Berlin')
// };

/////////// OBJECTS //////////

// const country = [
//     'Germany',
//     'Europe',
//     8000000,
//     'Berlin',
//     ['Munich', 'Dortmund', 'Hamburg']
// ];

// const countryObject = {
//     countryName: 'Germany',
//     region: 'Europe',
//     population: 8000000,
//     capitalCity: 'Berlin',
//     cities: ['Munich', 'Dortmund', 'Hamburg'],
// };

/////////// ACCESS OBJECT PROPERTIES ///////////

// const countryObject = {
//     countryName: 'Germany',
//     regionName: 'Europe',
//     population: 8000000,
//     capitalCity: 'Berlin',
//     cities: ['Munich', 'Dortmund', 'Hamburg'],
// };

// console.log(countryObject);

// console.log(countryObject.regionName);
// console.log(countryObject['regionName']);

// const nameStr = 'Name';
// console.log(countryObject['country' + nameStr]);
// console.log(countryObject['region' + nameStr]);

// const countryProperty = prompt('Country properties: countryName, regionName, population, capitalCity, cities');
// console.log(countryObject[countryProperty]);

// if (countryObject[countryProperty]) {
//     console.log(countryObject[countryProperty]);
// } else {
//     console.log('Invalid');
// };

// countryObject.language = 'German';
// console.log(countryObject);

/////////// OBJECT METHODS ////////////

// const user = {
//     name: 'John',
//     surname: 'Doe',
//     birthYear: 1975,
//     hobbies: ['Swimming', 'Gaming', 'Painting'],
//     isLegal: false,

//     // calculateAge: function(birthYear) {
//     //     return 2025 - birthYear;
//     // },
//     // calculateAge: function() {
//     //     // console.log(this);
//     //     return 2025 - this.birthYear;
//     // },
//     calculateAge: function() {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     info: function () {
//         return `Users name is ${this.name} ${
//             this.surname
//         }. Users age ${this.calculateAge(this.birthYear)}. Users hobbies are ${
//             this.hobbies[0]
//         }, ${this.hobbies[1]}, ${this.hobbies[2]}. User is ${
//             this.isLegal ? 'an adult' : 'not an adult'
//         }`;
//     },
// };

// console.log(user.calculateAge());
// console.log(user.age);
// console.log(user.age);
// console.log(user.age);
// console.log(user.info());

// const testArray = [];

// console.log(testArray.push('zbhzkn'));
// console.log(testArray);
// console.log(user['calculateAge'(1996)]);

////////// LOOPS (FOR LOOP) /////////

// console.log('Text 1');
// console.log('Text 2');
// console.log('Text 3');
// console.log('Text 4');
// console.log('Text 5');

// for (let index = 3; index <= 5; index++) {
//     console.log(`Text ${index}`);
// }

///////// LOOPS (BREAK AND CONTINUE) /////////

// const countryArray = [
//     'Germany',
//     'Europe',
//     8000000,
//     'Berlin',
//     ['Munich', 'Dortmund', 'Hamburg'],
//     100,
// ];

// const typeOfArray = [];

// for (let index = 0; index < countryArray.length; index++) {
//     console.log(countryArray[index], typeof countryArray[index]);

//     // typeOfArray[index] = typeof countryArray[index]
//     typeOfArray.push(typeof typeOfArray[index]);
// }

// console.log(typeOfArray);

// const birthArray = [1995, 1999, 1947, 2023];
// const ageArray = [];
// const currentYear = 2050

// for (let index = 0; index < birthArray.length; index++) {
//     ageArray.push(currentYear - birthArray[index]);
// }

// console.log(ageArray);

// for (let index = 0; index < countryArray.length; index++) {
//     if (typeof countryArray[index] !== 'number') continue;
    
//     console.log(countryArray[index], typeof countryArray[index]);
// }

// console.log('QUIT AFTER NUMBER')
// for (let index = 0; index < countryArray.length; index++) {
//     if (typeof countryArray[index] === 'number') break;

//     console.log(countryArray[index], typeof countryArray[index]);
// }

//////// CONTINUE TO LOOPS /////////

// const countryArray = [
//     'Germany',
//     'Europe',
//     8000000,
//     'Berlin',
//     ['Munich', 'Dortmund', 'Hamburg'],
//     100,
// ];

// for (let index = countryArray.length - 1; index >= 0; index --) {
//     console.log(index, countryArray[index]);
// }

// for (let index = 1; index <= 3; index++) {
//     console.log(`This is text loop ${index}`);

//     for (let rep = 1; rep <= 10; rep++) {
//         console.log(`Loop ${index}: Text ${rep}`);
//     }
// }

///////// WHILE LOOP /////////

// for (let index = 1; index <= 5; index++) {
//     console.log(`For loop: Text ${index}`);
// }

// let index = 1;
// while (index <= 5) {
//     // console.log(`While loop: Text ${index}`);
//     index++;
// }

// // Create random number until 4
// let randomNumber = Math.trunc(Math.random() * 10) + 1;

// while (randomNumber !== 4) {
//     console.log(randomNumber);
//     randomNumber = Math.trunc(Math.random() * 10) + 1;
// }

// console.log('You reached the number you wanted')