function palindrome(str){
    let string = str.toLowerCase()
    let checkStr = string.split('').reverse().join('')
    if(string==checkStr){
        console.log(`${str} is palindrome`);
        
    }
    else {
        console.log(`${str} is not palindrome`);  
    }
}

palindrome('Madam')