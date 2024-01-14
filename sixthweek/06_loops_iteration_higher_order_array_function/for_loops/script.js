//for of loop
const colors = ["red","blue","green","yellow"];
for(const color of colors){
    console.log(color)
}

const users = [
    {name: "John", age: 20},
    {name: "Jane", age: 30},
    {name: "Jack", age: 40},
    {name: "Jill", age: 50},
]
for(const user of users){
    console.log(user.name)
}

//loop over maps
const colorsMap = new Map();
colorsMap.set("color1","red");
colorsMap.set("color2","blue");
colorsMap.set("color3","green");

for(const [key,value] of colorsMap){
    console.log(key,value)
}

//For IN loop
const colorobj = {
    color1: "red",
    color2: "blue",
    color3: "green",
    color4: "yellow",
}
//This is in
for(const key in colorobj){
    console.log(key)//output: color1,color2,color3,color4
    console.log(colorobj[key])//output: red,blue,green,yellow
};

const colorArr = ["red","blue","green","yellow"];
for(const color in colorArr){
    console.log(colorArr[color])
}


for(const key in colorArr){
    console.log(colorArr[key])
}

//Array.forEach()
const colorsArr = ["red","blue","green","yellow"];
colorsArr.forEach(color => console.log(color));

colorsArr.forEach((color,index) => console.log(color,index));//output: red 0, blue 1, green 2, yellow 3
colorsArr.forEach((color,index,arr) => console.log(color,index,arr));//output: red 0, blue 1, green 2, yellow 3 (array)

function logColor(color){
    console.log(color)
}
//calling a function inside forEach
socials.forEach(logColor);

//Array.filter()

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers);

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
]
const retailCompanies = companies.filter(company => company.category === "Retail");//output: 3
console.log(retailCompanies);

//get companies that starten in or after 1980 and ended in our befor 2005
const earlyCompanies = companies.filter(company => (company.start >= 1980 && company.end <= 2005));
console.log(earlyCompanies);

const longCompanies = companies.filter(company => (company.end - company.start >= 10));

//map

const array =[1,4,9,16];
const map = array.map(x => x * 2);
console.log(map);//output: [2,8,18,32]

const map2 = array.map(x => "Number "+ x);
//output: ["Number 1","Number 4","Number 9","Number 16"]

//Create an array of company names
const companyNames = companies.map(company => company.name);
//output: ["Company One","Company Two","Company Three","Company Four","Company Five","Company Six","Company Seven","Company Eight","Company Nine"]

//Create an array of company names with start and end dates
const companyInfo = companies.map(company => {return {name: company.name, start: company.start, end: company.end}});


//create an array of objects with the name and length of each company in years
const companyLength = companies.map(company => {return {name: company.name, length: company.end - company.start}});

//chain map methods
const squareAndDouble = numbers.map(number => Math.sqrt(number)).map(sqrt => number * 2);
//can have multiple map methods chained together

//chaining different methods
const evenDouble = numbers.filter(number => number % 2 === 0).map(number => number * 2);
//output: [4,8,12,16,20]

//reduce

const nums = [1,2,3,4,5,6,7,8,9,10];
const sum = nums.reduce((total,number) => total + number,0);
//output: 55

const cart = [
    {id:1, item: "Laptop", price: 2000, quantity: 1},
    {id:2, item: "Mouse", price: 50, quantity: 2},
    {id:3, item: "Keyboard", price: 150, quantity: 1},
];
const total = cart.reduce((total,cartItem) => total + cartItem.price * cartItem.quantity,0);
//output: 2250

const people = [
    {firstName: "John", lastName: "Doe" ,age: 10,phone: "123-456-7890"},
    {firstName: "Jane", lastName: "Doe" ,age: 32,phone: "123-456-7890"},
    {firstName: "Jack", lastName: "Doe" ,age: 27,phone: "123-456-7890"},
    {firstName: "Jill", lastName: "Doe" ,age: 25,phone: "123-456-7890"},

];

const youngPeople = people.filter(person => person.age <= 25);
//output: [{firstName: "John", lastName: "Doe" ,age: 10,phone: "123-456-7890"},{firstName: "Jill", lastName: "Doe" ,age: 25,phone: "123-456-7890"}]
const youngPeopleWithOneName = youngPeople.map(person => ({name: person.firstName + " "+person.lastName,
email: person.phone}));
//output: [{name: "John Doe", email: "123-456-7890"},{name: "Jill Doe", email: "123-456-7890"}]

//Challenge2
const numbs = [2,-30,50,20,-12,9,7];
const positiveSum = numbs.filter(number => number > 0).reduce((total,number) => total + number,0);
//output: 88

//Challenge 3
const words = ["coder", "programmer","developer"];
const cWords = words.map(word => word[0].toUpperCase()+ word.slice(1));
//output: ["Coder","Programmer","Developer"]