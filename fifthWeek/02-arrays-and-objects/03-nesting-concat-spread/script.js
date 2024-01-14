let x;

const fruits = ['apple', 'pear', 'strawberry', 'grape', 'banana'];
const berries = ['strawberry', 'blueberry', 'blackberry'];

fruits.push(berries);// ['apple', 'pear', 'strawberry', 'grape', 'banana', ['strawberry', 'blueberry', 'blackberry']]

x = fruits[3] //

const allFruits = [fruits,berries]

x = allFruits[1][2]

x = fruits.concat(berries)


//spread Operator

x = [...fruits, ...berries]//

//Flatten

const nestedArray = [1,2,3,[4,5,6,[7,8,9]]]
x = nestedArray.flat(2)//[1,2,3,4,5,6,7,8,9]
//or flat() if array is not deeply nested

Array.isArray(x)//true

Array.from("12345")//["1", "2", "3", "4", "5"]

const a =1;
const b =2;
const c =3;

x = Array.of(a,b,c)//[1,2,3]

console.log(fruits); 