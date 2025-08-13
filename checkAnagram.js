function anagram (str1,str2){
    let pattern1 = str1.toLowerCase().split('').sort().join('')
    let pattern2 = str2.toLowerCase().split('').sort().join('')

    if(pattern1==pattern2) return true
}
console.log(anagram('army','mary'));
