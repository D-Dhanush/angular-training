var a=100; //global
function abs(){
    console.log(a); // this was undeined because 
    if(true){
        var a=10; // if we remove this it will take global variable (hoisting concept)
        console.log(a);
    }
    console.log(a);
}
abs();
console.log(a,typeof a);
// var keyword is optional
//its giving two scopes global and function
//hoisting:using the declaration before executing any code