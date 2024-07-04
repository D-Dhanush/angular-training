let fruits=['apple','ban','jsjs'];
console.log(fruits,typeof fruits);
//let can be used to be specific
for(let i in fruits){
    console.log(i,fruits[i]);
}

console.log("the higher oder function");

//call back function
//anonamous function type
print=function(v,i){
    console.log(v);
}
//higher order function
fruits.forEach(print);

//for off
for(let r of fruits){
    console.log(r,fruits);
}
//here arrow function is given as parameter it will become callback func adn foreach is a higer order function
fruits.forEach(v=>console.log(v));

