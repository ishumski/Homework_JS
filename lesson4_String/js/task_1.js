/*1. Написать функцию search, которая принимает в качестве параметров две строки. 
Функция должна вернуть количество, сколько раз вторая строка встречается в первой.*/

/*СПОСОБ 1*/
let firstStr = "You are guilty all the same you are guilty are are all the same";
let secondStr = "are";

function search(str1, str2) {
    if (typeof str1 != "string" || typeof str2 != "string") {
        console.error("This is not string!");
    }

    if (str1.length == 0 || str1.length < str2.length) {
        console.error("U enter wrong data!");
    }

    let sum = 0;
    let newStr1 = str1.split(" ");

    for (let i = 0; i < newStr1.length; i++) {

        if (newStr1[i] == str2) {
            sum++;
        }
    }
    return sum;
}
console.log(search(firstStr, secondStr));


/*СПОСОБ 2*/
let firstStr = "You are guilty all the same you are guilty are are all the same";
let secondStr = "ARE";
function search(str1, str2) {

    if (typeof str1 != "string" || typeof str2 != "string") {
        console.error("This is not string!");
    }

    if (str1.length == 0 || str1.length < str2.length) {
        console.error("U enter wrong data!");
    }

    let result = 0;

    str1 = str1.toLowerCase().split(" ").filter(item => (item.includes(str2.toLowerCase().split(" "))) ? result++ : null);
    return result;
}
console.log(search(firstStr, secondStr));