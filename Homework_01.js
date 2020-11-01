// //1. From years in array check for leap years [1974, 1900, 1985, 2000]

// let years = [1974, 1900, 1985, 2000];

// for (i=0;i<years.length;i++){
//     if ((years[i] % 4 == 0 && years[i] % 100 != 0) || (years[i] % 400 == 0)) 
//     {
//     console.log(years[i] + " is the leap year");
//     }
// }
// console.log("\nkoniec")
// //----------------------------------------------------------------------------------

// //2. Calculate factorial of 7.

// let number = 7;
// let factorial = 1;

// for(i=1; i<=number; i++) {
//     factorial = factorial * i;
// }
// console.log("Factorial of 7 is " + factorial)
// //----------------------------------------------------------------------------------

// // 3. Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

// let items = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;

// for(i=0; i<items.length; i++) {
//     if(items[i] % 2 == 1) {
//         sum += items[i]
//     }
// }
// console.log("The sum of odd numbers is " + sum)
// //----------------------------------------------------------------------------------

// //4. Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// let highestValue = array[0];
// let lowestValue = array[0];

// for(i=0; i<array.length; i++) {
//     if(array[i] > highestValue) {highestValue = array[i]}
//     if(array[i] < lowestValue) {lowestValue = array[i]}
// }
// console.log("The highest value from given array is " + highestValue + " and the lowest value is " + lowestValue)
// //----------------------------------------------------------------------------------

// //5. Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].
// let array = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];
// let longestString = "";

// for(i=0; i<array.length; i++) {
//     if(array[i].length > longestString.length){longestString = array[i]}
// }
// console.log("The longest string from the array is " + longestString)
// //----------------------------------------------------------------------------------

// //5. Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’] (second option to solve this case)
// let array = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];
// let index = 0;
// let stringLength = 0;

// for(i=0; i < array.length; i++) {
//     if(array[i].length > stringLength) {stringLength = array[i].length; index = i}
// }
// console.log("The longest string from the array is " + array[index])
// //----------------------------------------------------------------------------------

// 6. Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].
let array = [1,6,23,8,4,98,3,7,3,98,4,98];
let highestValue=array[0];

for(let i=1; i<array.length; i++) {
    if(array[i] > highestValue) {highestValue = array[i];}
    }
for(let i=1; i<array.length; i++) {
    if(array[i] === highestValue) {
        console.log(i);
    }
}
//----------------------------------------------------------------------------------

// // 7. Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;
// let quantity = 0;
// let average = 0.0;

// for(i=0; i<array.length; i++){
//     if(array[i] % 2 == 0) {sum += array[i]; quantity++}
// }
// average = sum / quantity;
// console.log("The average value from the given array is " + average)
// //----------------------------------------------------------------------------------

// //8. Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum =0;
// let quantity = 0;
// let average = 0.0;

// for(i=1; i<array.length; i++) {
//     if(i % 2 == 0) {sum += array[i]; quantity++}
// }
// average = sum / quantity
// console.log("The average value of items at even indexes is " + average)
// //----------------------------------------------------------------------------------

// //9. With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// let startValue = 0;
// let sum = 0;

// for (i=startValue; i<array.length; i++) {
//     if(array[i] % 2 == 0) {sum+=array[i]}
//     else {sum -= array[i]}
// }
// console.log("The result is " + sum)
// //----------------------------------------------------------------------------------