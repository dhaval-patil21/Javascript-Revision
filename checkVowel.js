function countVowelConsonant(str){
    let countVowel=0
    let countConsonant=0
    const vowel = ['a','e','i','o','u','A','E','I','O','U']
    for(i=0;i<str.length;i++){
        if(vowel.includes(str[i])){
            countVowel++;
        }else{
            countConsonant++;
        }
    }
    return {vowel:countVowel,consonant:countConsonant}
}

console.log(countVowelConsonant('Dhaval'));
