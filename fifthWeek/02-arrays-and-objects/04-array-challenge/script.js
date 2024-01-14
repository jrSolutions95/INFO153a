const arr = [1,2,3,4,5]
arr.unshift(0)
arr.push(6)
arr.reverse()
//output: [6,5,4,3,2,1,0]

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

const arr3 = arr1.slice(0,4).concat(arr2);// result: [1,2,3,4,5,6,7,8,9,10]
