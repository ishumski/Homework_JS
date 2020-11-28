/*3. Написать функцию compact, которая принимает в качестве параметров массив, 
и возвращает новый, в котором нет значений false, undefined, пустых строк, нулей и null.*/
const array = [1, false, 2, undefined, " ", 3, 4, 0, null, 5];

function compact(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr)) {
            return "Please, enter array!";
        }
        if (typeof arr[i] != "boolean" &&
            typeof arr[i] != "undefined" &&
            arr[i] != 0 &&
            arr[i] != " " &&
            arr[i] != null) {

            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(compact(array));

/********************************************************************/
const array2 = [1, false, 2, undefined, " ", 3, 4, 0, null, 5];

function compact(arr2) {
    if (!Array.isArray(arr2)) {
        return "Please, enter array!";
    }
    return arr2.filter(item => typeof item != "boolean" && typeof item != "undefined" && item != 0 && item != " " && item != null);
}
console.log(compact(array2));
