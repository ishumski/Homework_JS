/*2.Написать функцию reverse, которая принимает в качестве параметров массив и возвращает новый, 
точно такой же, только с элементами в обратном порядке.*/
const arrOfValues = [1, 2, 3, 4, 5];

function arrReverse(arr) {

    if (!Array.isArray(arr)) {
        return "Please, enter array!";
    }

    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}
console.log(arrReverse1(arrOfValues));

/********************************************/
const arrOfValues1 = [1, 2, 3, 4, 5];

function arrReverse1(arr1) {

    if(!Array.isArray(arr1)){
        return "Please, enter array!"
    }

    return arr1.reverse();
}
console.log(arrReverse1(arrOfValues1));
