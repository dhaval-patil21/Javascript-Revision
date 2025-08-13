function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));




//other approach


// function findDuplicates(arr) {
//     let seen = new Set();
//     let duplicates = new Set();
//     for (let num of arr) {
//         if (seen.has(num)) {
//             duplicates.add(num);
//         } else {
//             seen.add(num);
//         }
//     }
//     return [...duplicates];
// }

// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));






// function findDuplicates(arr) {
//     let freq = {};
//     let duplicates = [];
//     for (let num of arr) {
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     for (let num in freq) {
//         if (freq[num] > 1) {
//             duplicates.push(Number(num));
//         }
//     }
//     return duplicates;
// }

// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));

