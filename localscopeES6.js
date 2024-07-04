let a=100; //global
function abs(){
    let a=20;
    console.log(a); 
    if(true){
        // console.log(a); //this will give error cus hoisting is not aloowed in es6
        let a=10; // if we remove this it will take global variable (hoisting concept)
        console.log(a);
    }
    console.log(a);
}
abs();
console.log(a,typeof a);

function func2(){
const a=20;
console.log(a);

if(true){
    const a=30;
console.log(a);

}}
func2();