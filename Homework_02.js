// //1. Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

// let array = [1,6,23,8,4,8,3,7];

// function sumOfArray(params) {
//     let sum = 0;
//     for (let i = 0; i < params.length; i++) {
//         sum += params[i];
//     }
//     return sum;
// }

// console.log(sumOfArray(array));
// //===================================================================================================================

// //2. Create a function that returns sum of first and last elements of given array

// let array = [1,6,23,8,4,8,3,7];

// function sumOfFLElements(params) {
//     let sum = 0;
//     let lastElementIndex = params.length - 1;
//     for (let i = 0; i < params.length; i++) {
//         sum = params[0] + (params[lastElementIndex]);
//     }
//     return sum;
// }

// console.log(sumOfFLElements(array));
// //===================================================================================================================

// //3. Create a function that takes a number and return factorial of that number

// function factorialOfNumber(number) {
//     let i = number;
//     let summary = 1;
//     while(i > 0) {
//         summary *= i--;
//     }
//     return summary;
// }

// console.log(factorialOfNumber(5));
// //===================================================================================================================

//4. Create a function that returns given array in reverse order. // no build in functions

// let array = [1,6,23,8,4,8,3,7];

// function arrayReversed (params) {
//     let endIndex = params.length - 1;
//     let j = 0;

//     let newArray = [];
//     for(let i = endIndex; i >=0; i--) {
//         newArray[j] = params[i]
//         j++
//     }
//     return newArray
// }
// console.log(arrayReversed(array));
// //===================================================================================================================

// //5. Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

// let array = [1,6,23,8,4,8,3,7];

// function newPatternArray (params) {
//     let newArray=[];
//     let j= 0;

//     for(let i = 0; i < params.length; i=i+2) {
//         newArray[j] = params[i] + params[i+1];
//         j++;
//     }
//     return newArray;
// }

// console.log(newPatternArray(array))
// //===================================================================================================================

// //6. For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

// let array = [1,6,23,8,4,8,3];

// function newPatternArray (params) {
//     let newArray=[];
//     let j= 0;

//     for(let i = 0; i < params.length; i=i+2) {
//         if(i === params.length - 1){
//             newArray[j] = params[i] + params[i];
//             continue;
//         }
//         newArray[j] = params[i] + params[i+1];
//         j++;

//     }
//     return newArray;
// }

// console.log(newPatternArray(array))
// //===================================================================================================================

// //7. Create a function the return one random element from given array. // use random function 

// let array = [1,6,23,8,4,8,3,7];

// function randomElementArray (params) {
//     let randomElement = Math.random() * params.length;
//     let randomElementWithoutRest = Math.floor(randomElement);

//     return params[randomElementWithoutRest];
// }
//     console.log(randomElementArray(array))
//     //===================================================================================================================

// //8. Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.

// let array = [1,6,23,8,4,8,3,7];


// function attemtsRandomNumerArray(someArray, someTries) {
//     let newArrayWithRandomElements = [];

//     for (let i=0; i<someTries; i++){
//         newArrayWithRandomElements[i] = randomElementArray(someArray)
//     }
//     return newArrayWithRandomElements
// }

// function randomElementArray (params) {
//     let randomElement = Math.random() * params.length;
//     let randomElementWithoutRest = Math.floor(randomElement);

// return params[randomElementWithoutRest];
// }

// function lowestElementFromArray(anotherArray){
//     let lowerNumber = anotherArray[0];

//     for (let i = 0; i < anotherArray.length;i++){
//         if (anotherArray[i] < lowerNumber) {
//             lowerNumber = anotherArray[i]
//         }
//     }
//     return lowerNumber;
// }
// let myNewArray = attemtsRandomNumerArray(array, 3);

// console.log(myNewArray);
// console.log(lowestElementFromArray(myNewArray));
// //===================================================================================================================

// 9. Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array
// let array = [1, 6, 23, 8, 4, 8, 3, 7];

// let randomizeMyArray = function (params) { //tworzę funkcję co pobiera tablice1 a zwraca tablice2 z losowo wybnranymi elementami z tablicy1

//     let tempArray = params;
//     let newArrayWithRandomElements = []; //robię drugą tablicę, którą mam zwrócić, jak juz zapełnię losowymi liczbami pobranymi z pierwszej

//     while (tempArray.length > 0) {   //w tej pętli będę: 1. pobierać losowe elementy z danej tablicy, 2. wpisywać do drugiej tablicy 
//         let losIndeksElementu = Math.floor(Math.random() * tempArray.length);
//         let pobranyElement = tempArray[losIndeksElementu];
//         newArrayWithRandomElements.push(pobranyElement); //dodaję pobrany element do tablicy nowyArray
//         tempArray.splice(losIndeksElementu, 1); // wyrzucam element o wylosowanym indeksie z tablicy danyArray
//     };

//     return newArrayWithRandomElements;   //zwracam nową tablicę z losowymi elementami z tej którą dano ano dano dano
// };


// for (let i = 0; i < 5; i++) {
//     console.log(randomizeMyArray(array));
//     console.log("Heja Ho Ho")
// };
// //===================================================================================================================

// let array = [1, 6, 23, 8, 4, 8, 3, 7];

// let randomizeMyArray = function (params) { //tworzę funkcję co pobiera tablice1 a zwraca tablice2 z losowo wybnranymi elementami z tablicy1

//     let newArrayWithRandomElements = []; //robię drugą tablicę, którą mam zwrócić, jak juz zapełnię losowymi liczbami pobranymi z pierwszej

//     while (params.length > 0) {   //w tej pętli będę: 1. pobierać losowe elementy z danej tablicy, 2. wpisywać do drugiej tablicy 
//         let losIndeksElementu = Math.floor(Math.random() * params.length);
//         let pobranyElement = params[losIndeksElementu];
//         newArrayWithRandomElements.push(pobranyElement); //dodaję pobrany element do tablicy nowyArray
//         params.splice(losIndeksElementu, 1); // wyrzucam element o wylosowanym indeksie z tablicy danyArray
//     };

//     return newArrayWithRandomElements;   //zwracam nową tablicę z losowymi elementami
// };


// //for (let i = 0; i < 5; i++) {
// //console.log(randomizeMyArray(array));
// //};

// console.log(randomizeMyArray(array));
// console.log(array);
// //===================================================================================================================

// //10. Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

// let array = [1, 6, 23, 8, 4, 8, 3, 7];

// let randomOperator = function (params) {

//     let result = 0;

//     for (i = 0; i < params.length; i++) {
//         let losowaWartosc = Math.random()
//         if (losowaWartosc < 0.5) {
//             result -= params[i];
//         } else {
//             result += params[i];
//         };
//     }

//     return result;
// }

// console.log(randomOperator(array));
// //===================================================================================================================

// //11. Create a function that will return the current day name in Polish.
// let currentDayInPolish = function () {

//     let d = new Date();
//     let n = d.getDay();

//     //let tablicaDni = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
//     //return tablicaDni[n]

//     switch (n) {
//         case 0:
//             return "niedziela";
//         case 1:
//             return "poniedziałek";
//         case 2:
//             return "wtorek";
//         case 3:
//             return "środa";
//         case 4:
//             return "czwartek";
//         case 5:
//             return "piątek";
//         case 6:
//             return "sobota";
//     }
// }

// console.log(currentDayInPolish());
// //===================================================================================================================

// //12. Create a function that tells us how many days till Friday

// let daysTillFriday = function () {

//     let d = new Date();
//     let n = d.getDay();

//     switch (n) {
//         case 0:
//             return 5;
//         case 1:
//             return 4;
//         case 2:
//             return 3;
//         case 3:
//             return 2;
//         case 4:
//             return 1;
//         case 5:
//             return "It is Friday";
//         case 6:
//             return 6;
//     }
// }

// console.log(daysTillFriday());
// //===================================================================================================================

//13. Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 

let simpleCalculator = function (a, b) {
    let calculator = {
        sum: a + b,
        sub: a - b,
        multiply: a * b,
        divide: a / b
    };
    return calculator
}
console.log(simpleCalculator(2, 3))