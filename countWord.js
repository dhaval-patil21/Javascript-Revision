function countWord(sentence){
    let words= sentence.toLowerCase().split(' ')
    let count={}
    for (word of words){
        count[word] = (count[word] || 0) + 1
    }
    return count
}

console.log(countWord('I love JavaScript and I love coding'));
