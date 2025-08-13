function capitalFirstLetter(sentence){
    let capitalWords = sentence.split(' ')
    .map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    return capitalWords
}
console.log(capitalFirstLetter('I love programming and coding'));
