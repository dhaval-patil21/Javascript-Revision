function fibonacci(number){
    let result = [0,1]
    if(number==0 || number==1) return number
    for(i=2;i<=number;i++){
        result[i]= result[i-1] + result[i-2]
    }
    return result
}
console.log(fibonacci(6));

// f(n) = f(n-1) + f(n-2)