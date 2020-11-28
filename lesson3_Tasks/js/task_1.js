/*1. Написать функцию fill, которая принимает в качестве параметров длину массива и любое значение. 
Функция должна вернуть новый массив с указанной длиной и все элементы должны быть указанным значением.*/

// function fill(length, n) {
//     if (typeof length != "number") {
//         return "please, enter the number";
//     }
//     if (typeof length === "undefined" || typeof n === "undefined") {
//         return "please, enter parameters";
//     }
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(n);
//     }
//     return arr;
// }
// console.log(fill(6, "need pizza"));

/******************************************************/
// function fillNew(length, n) {
//     if (typeof length != "number") {
//         return "please, enter the number";
//     }
//     if (typeof length === "undefined" || typeof n === "undefined") {
//         return "please, enter parameters";
//     }
//     return Array(length).fill(n);
// }
// console.log(fillNew(3, "i knew something new!"));



