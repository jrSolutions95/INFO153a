//console.log(window.document);


//console.log(document.body.innerHTML);

//acsess the links
console.log(document.links[0]);//gives an html collections, and we can access the first link

//document.body.innerHTML = "<h1>DOM is awesome!</h1>"; //changes the body of the html
console.log(document.getElementById("main"));
document.querySelector("#main h1").innerText = "Hola damer"; //same as above