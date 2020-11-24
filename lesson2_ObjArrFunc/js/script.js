const arr1 = [1, 4];
const arr2 = [3, 7];

function getLength(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "U enter wrong data!"
    }
    let firstCoordinate = arr2[0] - arr1[0];
    let secondCoordinate = arr2[1] - arr1[1];
    let firstCoordinateSqr = Math.pow(firstCoordinate, 2);
    let secondCoordinateSqr = Math.pow(secondCoordinate, 2);
    let result = (Math.sqrt(firstCoordinateSqr + secondCoordinateSqr)).toFixed(2);
    return result;
}
console.log(getLength(arr1, arr2));