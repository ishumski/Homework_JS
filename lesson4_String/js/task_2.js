/*2. Написать функцию strip, которая принимает в качестве параметров строку, 
и убирает из нее все пробелы в начале и в конце. */

/**СПОСОБ 1*/
const stripStr = "   ram ambah aramam b urum    ";
function strip(str) {
    if (typeof str != "string") {
        return ("Please, enter string");
    }

    if (!str || 0 === str.length) {
        return ("Please, enter string");
    }

    let newArr = [];
    newStr = str.split(" ");

    for (let i = 0; i < newStr.length; i++) {

        if (newStr[i] != "") {
            newArr.push(newStr[i]);
        }
    }

    newArr = newArr.join(" ");
    return newArr;
}
console.log(strip(stripStr));

// /*СПОСОБ 2*/
const stripStr = "   ram ambah aramam b urum    ";
function strip(str) {
    if (typeof str != "string") {
        return ("Please, enter string");
    }

    if (!str || 0 === str.length) {
        return ("Please, enter string");
    }

    str = str.split(" ");

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "") {
            str.shift("");
        }
    }

    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] == "") {
            str.pop("");
        }
    }

    str = str.join(" ");
    return str;
}
console.log(strip(stripStr));

/**СПОСОБ 3*/
let stripStr = "      ram ambah aramam b urum    ";
let arr = [];
arr = stripStr.split(" ").filter(item => (item != "") ? arr.push(item) : null).join(" ");
console.log(arr);







