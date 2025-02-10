// let fruit = 'apple';

// console.log('Michael');

// let firstName = 'Michael';
// console.log(firstName);
// /*console.log(firstName);
// console.log(firstName);
// console.log(firstName);*/

// // Variable Name Conventions
// let PI = 3.141592;

// let firstJob = 'programmer';
// let currentJob = 'teacher';

// console.log(firstJob)

// let appleIsFruit = true;
// console.log(appleIsFruit)
// console.log(typeof true)
// console.log(typeof 'kjbv')
// console.log(typeof 22)
// console.log(typeof appleIsFruit)

// appleIsFruit = 'true'
// console.log(typeof appleIsFruit) //Dynamic typing

// let _undefined = 26;
// console.log(_undefined);
// console.log(typeof _undefined);
// console.log(typeof null);

// let price = 120;
// price = 250;

// const birthYear = 1996;

// console.log(birthYear);

// // var category = 'electronics';
// // category = 'clothes';

// // console.log(category);

// Arithmetic Operators

// const currentYear = 2025;
// const age1 = currentYear - 1996;
// const age2 = currentYear - 2005;
// console.log(age1, age2);

// console.log(age1 * 16);
// console.log(age1 / 10);
// console.log(5 ** 4);

// const firstName = 'John';
// const lastName = 'Doe';
// console.log(firstName + ' ' + lastName);

// // Assignment operator
// let fullName = firstName + lastName;
// console.log(fullName);

// let counter = 0;
// counter += 10;
// console.log(counter);

// counter *= 5;
// console.log(counter);

// counter /= 2;
// console.log(counter);

// counter ++;
// console.log(counter);

// counter--;
// counter--;
// counter--;
// console.log(counter)

// // Comparison opperators

// const legalAge = age2 >= 18;
// console.log(age1 > age2);

// console.log(legalAge);

// console.log(currentYear - 1996 > currentYear - 2005);

// const currentYear = 2025;
// const age1 = currentYear - 1996;
// const age2 = currentYear - 2005;

// console.log(currentYear - 1996 > currentYear - 2005);
// console.log(100 - 30 - 10);

// let a, b;
// a = b = 100 - 30 - 10;
// console.log(a, b);

// console.log(age1, age2);
// const average = (age1 + age2) / 2;
// console.log(average);

// const brandName = 'Toyota';
// const modelName = 'Corolla';
// const year = 2015;

// const myCar = 'My car is ' + brandName + ' ' + modelName + ' bought in ' + year;

// console.log(myCar);

// const myCar2 = `My car is ${brandName} ${modelName}, I bought it in ${year}`;
// console.log(myCar2);

// console.log('hello \n how are you \n I am fine');
// console.log(
//     `Hello
//         how are you
//             i am fine`
// );

// const personAge = 20;
// const isLegal = personAge >= 18;

// if(isLegal) {
//     console.log('John can buy alcohol')
// } else {
//     const yearsLeft = 18 - personAge;
//     console.log(`John is too young for drinking, he has to wait ${yearsLeft} years before he can start drinking alcohol`);
// }

// // TYPE CONVERSION
// const imputAge = '26';
// console.log(Number(imputAge) + 3);
// console.log(Number(imputAge), imputAge);
// console.log(Number('hello'));
// console.log(typeof NaN);
// console.log(String(100), 100);

// // TYPE COHERSION
// console.log('I was born in ' + 1999);
// console.log('1999' - '20' - 10);
// console.log('1990' * '5');
// let number = '10' + 10; //1010
// number = number - 10; //1000
// console.log(number);

// Falsy values: 0, '', undefined, null, nan

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('ajeb'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const candy = 0;

// if (candy) {
//     console.log('Do not eat too much candy');
// } else {
//     console.log('You have no candy')
// }

// let age = 0; //undefined

// if (age) {
//     console.log('age');
// } else {
//     console.log('no age');
// }

// const age = '18';

// if(age === 18) console.log('You are 18 years old (===)');
// if(age == 18) console.log('You are 18 years old (==)');

// const inputAge = Number(prompt('What is your age?'));
// console.log(inputAge);

// if (inputAge == 26) console.log('you are 26 years old')
//     else if(inputAge === 12) console.log('you are 12 years old')
// else console.log('you are not 26 or 12');

// if(inputAge !== 26) console.log('No,no no');

// const hasMotorcycle = true;
// const hasCar = true;

// console.log(hasMotorcycle && hasCar);
// console.log(hasMotorcycle || hasCar);
// console.log(!hasMotorcycle);

// const isRainy = true;
// const shouldDrive = hasCar && isRainy;

// if (shouldDrive) {
//     console.log('John should drive because rainy')
// } else if (hasMotorcycle && !isRainy) {
//     console.log('John should go with his motorcycle')
// } else {
//     console.log('You should not drive')
// };

const operator = '+';

const number1 = 10;
const number2 = 5;

switch(operator) {
    case '+':
        console.log('addition');
        console.log(`${number1 + number2}`);
        break;
    case '-':
        console.log('addition');
        console.log(`${number1 - number2}`);
        break;
    case '*':
        console.log('addition');
        console.log(`${number1 * number2}`);
        break;
    case '/':
        console.log('addition');
        console.log(`${number1 / number2}`);
        break;
    default:
        console.log('Invalid operator')
        break;
}

// EXPRESSIONS
8 + 7;
1000;
true && false && !false;

// STATEMENTS
if (12 < 26) {
    console.log('12 is smaller than 26')
}


// const str = 'hgsdv';
// console.log(`${str} apples`)

const age = 36;

// age >= 18 
//     ? console.log('You can drive a car')
//     : console.log('You can not drive a car');

const vehicle = age >= 18 ? 'car' : 'bicycle';
console.log(vehicle);

let vehicleTwo;
if (age >= 18) vehicleTwo = 'car';
else vehicleTwo = 'bicycle';

console.log(vehicleTwo);

console.log(`I can drive ${age >= 18 ? 'car' : 'bicycle'}`);
