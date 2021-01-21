function chunk(array, size) {
    if(size <= 0) {
        return "Size can´t be less or equal to zero";
    }

    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        var auxArray = [];
        for (let j = 0; j < size; j++) {
            auxArray.push(array[i]);
            if(i === array.length-1) {
                break;
            }
            i = j < (size-1) ? i+=1 : i;
        }
        newArray.push(auxArray);
    }

    return newArray;
}

var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]