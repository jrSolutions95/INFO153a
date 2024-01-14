let x;
const arr = [1,2,3,4,5,6,7,8,9,10]

arr.push(11)

arr.pop()

arr.unshift(0)//add to the beginning of the array

arr.shift()//remove the first element of the array

arr.reverse()//reverse the array

x = arr.includes(9)//check if the array includes 9

x = arr.indexOf(9)//return the index of 9

x = arr.indexOf(340)//will return -1 if the element is not found

x = arr.slice(1,4)//return a new array from index 1 to index 4  (not included) so 0 1 2 3

//x = arr.splice(1,4)//remove the elements from index 1 to index 4 (not included) and return them in a new array

//x = arr.splice(3.1)//remove the elements from index 3 to the end of the array and return them in a new array

x = arr.splice(1,4).reverse().toString.charAt(0)


console.log(arr)