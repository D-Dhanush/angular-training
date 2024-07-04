let emp={
    "eid#":101,
    "ename":"sh"
}

let fruits =['apple','banana','orange'];
// let a=fruits[0]
// let b=fruits[1]
// let [a,b]=fruits  // array destructure 
// console.log(a,b);

let {eid,...e}=emp;
console.log(eid,e) //object destructure

let [a,...rem]=fruits
console.log (a,rem);

let fcopy=[...fruits];
fcopy.push('mango')
console.log(fcopy,fruits)