function factorial(num){
    let result = 1
    if(num<0) return console.log("Negative number doesn't have factorials");
    if(num==0 || num==1) return 1

    for(i=2;i<=num;i++){
        result*=i
    }
    return result  
}

console.log(factorial(6));
