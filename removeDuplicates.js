function removeDuplicates(array){
    let result = []
    for(i=0;i<=array.length;i++){
        if(!result.includes(i)){
            result.push(i)
        }
    }
    return result
}

console.log(removeDuplicates([1,2,3,4,2,3,5,1,8,6,9]));
