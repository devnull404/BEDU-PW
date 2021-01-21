function frequency(string) {
    debugger;
    // var stringArray = string.split("").sort();
    var stringArray = [];

    // convertir en array
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        stringArray.push(element);
    }

    // ordenamiento burbuja
    for (let i = 1; i < stringArray.length; i++) {
        for (let j = 0; j < (stringArray.length - i); j++) {
            if(stringArray[j] > stringArray[j+1]) {
                let aux = stringArray[j];
                stringArray[j] = stringArray[j+1];
                stringArray[j+1] = aux;
            }
        }
    }

    var objAux = {}

    for (var pos in stringArray) {
        var char = stringArray[pos];
        if(!objAux[char]) {
            objAux[char] = 0;
        }
        else {
            continue;
        }
        for (var pos2 in stringArray) {
            if(char === stringArray[pos2]) {
                objAux[char]++;
            }
        }
    }

    return objAux;
}

console.log('Test 1:', frequency('cccbbbaaa')) // {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org')) // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com')) // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}