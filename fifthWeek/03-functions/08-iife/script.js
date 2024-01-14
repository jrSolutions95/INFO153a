const user = {name: 'John', age: 30};


// with this one: we are allowed to have it, no errors
(function(){
    const user = {name: 'John', age: 30};
    console.log(user);
    const hello = () => {
        console.log('Hello');
    }
    hello();
})();

((function(name){
    console.log(name);
    const hello = () => {
        console.log('Hello '+ name);
    }
    hello();
})("lars"));


(function hello(){
    console.log('Hello');
}())