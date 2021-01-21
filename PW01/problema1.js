function deepEqual(a, b) {
    if(typeof(a) === "object" && typeof(b) === "object") {
        var keysA = Object.keys(a).sort();
        var keysB = Object.keys(b).sort();
        var aux = false;

        if(keysA.length === keysB.length) {
            for (var i = 0; i < keysA.length; i++) {
                aux = deepEqual(a[keysA[i]], b[keysB[i]]);
            }
            return aux;
        }
        else {
            return false;
        }
    }
    else {
        return a === b;
    }
}
  
var john = {
    firstName: 'John',
    lastName: 'Doe'
}
  
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false