function longestWord(sentence){
    let word = sentence.split(' ').sort((a,b)=> {return b.length-a.length})
    return longword = word[0]
}
console.log(longestWord("I love programming"));
