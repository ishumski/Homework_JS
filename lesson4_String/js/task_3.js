/*3. Написать функцию checkIfEnds, которая принимает в качестве параметров две строки 
и проверяет заканчивается ли первая строка второй.*/

/*СПОСОБ 1*/
const firstStr = "https://www.google.by";
const secondStr = "by";

function checkIfEnds(str1, str2) {

    //создаём переменную ends которая считает количество последних символов:
    //str1 = 21 символ, str2 = 2; 21-2 = 19;
    let ends = str1.substring(str1.length - str2.length); //говорит о том, 
    //что мы будем проверять строку str1 начиная с 19 элемента и до конца;

    // далее узнаем длину ends.length, она равна 2;
    for (let i = 0; i < ends.length; i++) {

        // теперь поэлементно, начиная с 19 элемента(i=0) проверяем равенство наших элементов
        if (ends[i] == str2[i]) {
            return true;
        } return false;
    }
}
console.log(checkIfEnds(firstStr, secondStr));

/*СПОСОБ 2*/
const firstStr = "https://www.google.by";
const secondStr = "google.by";

function checkIfEnds(str1, str2) {
    return str1.slice(-(str2.length)) === str2;
}
console.log(checkIfEnds(firstStr, secondStr));

/*СПОСОБ 3*/
const firstStr = "https://www.google.by";
const secondStr = ".by";

function checkIfEnds(str1, str2) {
    return str1.endsWith(str2);
}
console.log(checkIfEnds(firstStr, secondStr));