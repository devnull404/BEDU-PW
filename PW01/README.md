## Primer Postwork

### Problema 1 
Código:
![alt text]()

Output:
![alt text]()

### Problema 2
Código:
![alt text]()

Output:
![alt text]()


### Problema 3
Código:

```javascript
function thirdProblem(word) {
    count = {}
    for (let i = 0; i < word.length; i++) {
        !count.hasOwnProperty(word[i]) ? (count[word[i]] = 0, count[word[i]] += 1): count[word[i]] += 1
    }
    return count
}
```

Con lo que, al tener como entrada el string "www.google.com", introduciendo la función **console.log(thirdProblem("www.google.com"))** obtenemos como output:

``` JSON
{
    ".": 2,
    "c": 1,
    "e": 1,
    "g": 2,
    "l": 1,
    "m": 1,
    "o": 3,
    "w": 3
}
```