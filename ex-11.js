//call method
//The call() method calls the function with a given this value and arguments provided individually.

const displayData = (name,age)=>{
    return "Name is "+name+"age is "+age;
}

const data = {
    name:"sumit",
    age: "28"
}

const result = displayData.call(this, data.name, data.age)
console.log(result);


//syntax 
//call(thisArg, arg1, /* …, */ argN)
//ref MDN