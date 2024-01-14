const person = {
    name: "Lars Harald", 
    age: 25,
    isAdmin: true,
    adress: {
        street: "Kongens gate 1",
        city: "Oslo"
    },
    hobbies: ["gaming", "coding", "music"]
}


let x;


x = person.name;//"Lars Harald"
x = person.age;//25
x = person.isAdmin;//true


delete person.age;//deletes age from person object

person.hasChilderen = false;//adds hasChilderen to person object   

person.greet = function(){
    return `Hello my name is ${this.name}`;
}



person.name = "Lars Harald Aasen";
console.log(person);

