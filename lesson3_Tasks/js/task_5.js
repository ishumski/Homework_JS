/*5. Написать функцию intersection, которая принимает в качестве параметров два массива,
и возвращает новый, который состоит из общих элементов переданных массивов,
то есть тех, которые есть и в первом, и во втором.*/

const firstArr = [4, undefined, 15, null, 23, 42];
const secondArr = ["mama mia!", 13, true, 98];

function intersection(arr1, arr2) {

    if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
        return ("Please, enter arrays");
    }

    return arr1.concat(arr2);
}
console.log(intersection(firstArr, secondArr));

/***********************************************************/
let firstArr = [4, undefined, 15, null, 23, 42];
let secondArr = ["mama mia!", 13, true, 98];

function mergingOfArr(arr1, arr2) {
    if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
        return ("Please, enter arrays");
    }
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }

    return arr1;
}
console.log(mergingOfArr(firstArr, secondArr));