const library = [
    {
        title: "The Road Ahead",
        autohor: "Bill Gates",
        status: {
            own: true,
            readin: false,
            read: false
        }
    },
    {
        title: "Da Vinci Code",
        autohor: "Dan Brown",
        status: {
            own: true,
            readin: true,
            read: false
        }
    },
    {
        title: "Alle mine venner er superhelte",
        autohor: "david",
        status: {
            own: true,
            readin: false,
            read: false
        }
    }
]
//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//Step 3- destructuring

const { title:fristBook } = library[0];//fristBook = "The Road Ahead"

console.log(fristBook);

//Step 4

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);





