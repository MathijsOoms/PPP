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

const calculateCurrentAge = function (birthYear) {
    return 2025 - birthYear;
};

const leftYearsForLegalAge = function(birthYear, name) {
    const currentAge = 2025 - birthYear;
    const leftYears = 18 - currentAge;

    if (leftYears > 0) {
        console.log(`${name} will be 18 i, ${leftYears} years.`)
        return leftYears
    } else {
        console.log(`${name} already has a legal age.`)
        return -1;
    }
    // return `${name} will be 18 i, ${leftYears} years.`
};

leftYearsForLegalAge(2007, 'Michael');
leftYearsForLegalAge(2004, 'John');