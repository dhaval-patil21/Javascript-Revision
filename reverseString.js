// function reverseString(str) {
//     return str.split('').reverse().join()
// }
// console.log(reverseString("Hello"));



function reverseString(str){
    let string=''
    for(i=str.length-1;i>=0;i--){
        string+=str[i]
    }
    return string
}

console.log(reverseString("Dhaval"));
