/*4. Написать функцию compare, которая проверяет на равенство две строки, 
причем проверка не должна зависеть от регистра.*/

/*СПОСОБ 1*/
let firstStr = "mAMa, i'm a criMinal!";
let secondStr = "MamA, i'm a CriminAl!";

function compare(str1, str2) {
    if (typeof str1 != "string" || typeof str2 != "string") {
        return "U enter wrong data!";
    }

    if (str1.length !== str2.length) {
        return "Strings are not equivalent in length";
    }

    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compare(firstStr, secondStr));


/*СПОСОБ 2*/
let firstStr = "mAMa, i'm a criMinal!";
let secondStr = "MamA, i'm a CriminAl!";

function compare(str1, str2) {

    return str1.toLowerCase().localeCompare(str2.toLowerCase()) === 0;
}
console.log(compare(firstStr, secondStr));