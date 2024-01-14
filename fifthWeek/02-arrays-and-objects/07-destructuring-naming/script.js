const firstname = 'Jan';
const lastname = 'Janssens';
const age = 25;

const person = {//here you dont need to to firstname: firstname, lastname: lastname, age: age!
    firstname,
    lastname,
    age,
    greet(){
        return `Hello my name is ${this.firstname} ${this.lastname}`;
    }
}


//Destructuring

const todo = {
    id: 1,
    name: "Get milk",
    completed: false
}

const {id} = todo;


//const{id,name} = todo;//if titel is not in todo it will be undefined

//Desconstructing array:

const arr = [1,2,3,4,5];

const [first,second,...rest] = arr;//first = 1, second = 2, rest = [3,4,5]

console.log(person.greet());