/*4. Написать функцию isEqual, которая принимает в качестве параметров два массива и проверяет их идентичность.
Напоминаю, что массивы - это ссылочные типы данных и простая проверка на равенство двух переменных не сработает.*/

const firstArr = [4, 8, 15, 16, 23, 42];
const secondArr = [23, 42, 15, 16, 4, 8];

function isEqual(arr1, arr2) {

    if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
        return ("Please, enter arrays");
    }

    return arr1.sort((a, b) => a - b).toString().toLowerCase() === arr2.sort((c, d) => c - d).toString().toLowerCase();
}
console.log(isEqual(firstArr, secondArr));