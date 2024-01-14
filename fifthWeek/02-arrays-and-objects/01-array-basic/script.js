//Array literal


let x;
const numbers = [12,13,45,39,39]

//Array constructor
const fruts = new Array('apple','banana','orange','mango')

console.log(numbers)
console.log(fruts)  


x=numbers[0]

x = numbers[2] + numbers[4]

x = "my favorite frut is  + ${fruts[3]} +  and it is  + ${numbers[4]} + years old";


fruts[4] = 'grapes'
//add to the end of the arr ay
fruts.push('mango')

//or

fruts[fruts.length] = 'mango'


