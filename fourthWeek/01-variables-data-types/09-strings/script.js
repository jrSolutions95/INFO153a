let x;

const name = "John";
const age = 30;

x = "Hello, my name is " + name + " and I am " + age;

console.log(x);

//Template literals

x = `Hello, my name is ${name} and I am ${age}`;

//String properties and methods
const s = "Hello World";

x = s.length;

const y = new String("Hello World");

x = typeof y;

//Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();

x = s.charAt(0);

x = s.indexOf("o");
x = s.substring(0, 5);
x.slice(-3); //starts from the end
x = s.split(" ");

x = s.trim(); //removes white space

x = s.replace("World", "There");

x = s.includes("World");

x = s.valueOf();
