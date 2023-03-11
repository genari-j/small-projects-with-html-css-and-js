const numbersList = [1, 2, 3, 4, 5];
const findNumber = 5;

function verificarStringNoArray(list, findNumber) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === findNumber) {
            return true;
        }
    }
    return false;
}

let numberFound = verificarStringNoArray(numbersList, findNumber);

console.log(numberFound);