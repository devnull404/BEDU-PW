function thirdProblem(word) {
    count = {}
    for (let i = 0; i < word.length; i++) {
        !count.hasOwnProperty(word[i]) ? (count[word[i]] = 0, count[word[i]] += 1): count[word[i]] += 1
    }
    return count
}