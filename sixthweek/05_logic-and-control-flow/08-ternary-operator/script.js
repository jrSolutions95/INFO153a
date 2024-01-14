const age = 20;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

//using a ternary operator
age >= 18 ? console.log("You are an adult") : console.log("You are a minor");
//assign a conditonal value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "You can vote" : "You can't vote";

console.log(canVote);
console.log(canVote2);

const auth = true;

let redirect;
if(auth){
    alert("You are logged in");
  redirect = "/dashboard";
} else {
    alert("You are not logged in");
  redirect = "/login";
}

console.log(redirect);

//using a ternary operator
const redirect2 = auth ? "/dashboard" : "/login";
console.log(redirect2);

const redirect3 = auth 
? (alert("Welcome to dashboard)","/dashboard")) 
: (alert("Acess denied"),"/login");
console.log(redirect3);
//using a ternary operator
auth ? console.log("You are logged in") : console.log("You are not logged in");