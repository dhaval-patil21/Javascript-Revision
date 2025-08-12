function findMinMax(arr){
    let newArray = arr.sort((a,b)=>{return a-b})
    let minNumber=newArray[0]
    let maxNumber=newArray[newArray.length-1]

    return {Maximum:maxNumber,Minimum:minNumber}
}

console.log(findMinMax([2,1,5,4,8,3,9,6]));
