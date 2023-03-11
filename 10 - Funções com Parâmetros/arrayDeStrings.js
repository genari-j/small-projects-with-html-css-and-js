const stringsList = ['João', 'Victor', 'de', 'Oliveira', 'Genari'];
const findString = 'Oliveira';

function verificarStringNoArray(list, findString) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === findString) {
            return true;
        }
    }
    return false;
}

let foundString = verificarStringNoArray(stringsList, findString);

console.log(foundString);