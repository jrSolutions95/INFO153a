let x;

const todo = {};
//same as cost todo = new Object();

todo.id = 1;
todo.name = "Get milk";
todo.completed = false;

x = todo;

const person = {
    adress: {
        street: "Kongens gate 1",
        city: "Oslo",
        coords: {
            lat: 123,
            lng: 456
        }
    },
}

x = person.adress.coords.lat;

const ojb1 = {
    a: 1,
    b: 2,
    c: 3
}

const obj2 = {
    d: 4,
    e: 5
}

const obj3 = {ojb1, obj2};

const ojb3 = {...ojb1, ...obj2};//same as above took them and spread them across the new object

const ojb4 = Object.assign({}, ojb1, obj2);//same as above


const todos = [
    {
        id: 1,
        name: "Get milk",
        completed: false
    },
    {
        id: 2,
        name: "Get bread",
        completed: true
    },
    {
        id: 3,
        name: "Get butter",
        completed: false
    }
]

x = todos[1].name;//"Get bread"

x = Object.keys(todo);//["id", "name", "completed"]

x = Ojbject.keys(todo).length;//3

x = Object.values(todo);//[1, "Get milk", false]

x = Object.values(todo).length;//3  

x = Object.entries(todo);//[["id", 1], ["name", "Get milk"], ["completed", false]]


console.log(x);