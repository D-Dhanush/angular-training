//function in function in ES5
// function add (){
//     var a=10;
//     function add()
//     {
//         console.log("hi");
//     }
// }

//classes
class demo{

    constructor(){
        console.log("cons"); // constructor automatically calls itself
        //in other language the construcor has same name as class
    }
    disp(){
        console.log("hello");
    }
}
//in other program demo d 
let d=new demo(); //object
d.disp();

//inheritence
class child extends demo{
constructor(){
    super();
    console.log("C Cons");
}
}
let c=new child();
c.disp();