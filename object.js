// let emp={"eid":101,"ename":"ravi"}
// console.log(emp, typeof(emp))

let emp={"eid":101,
        "ename":"ravi",
        "details":function(){
            console.log(this.eid,this.ename)  //emp is a single object it is taking a reference
        }
    }

    emp2=emp;
console.log(emp, typeof(emp))
emp.details()
emp.ename="pra"
console.log(emp2,typeof(emp2))
emp2.details()


console.log(Array.isArray(emp));
let 