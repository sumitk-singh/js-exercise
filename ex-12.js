//bind mehtod
//The bind() method allows an object to borrow a method from another object 
//without making a copy of that method. 
//This is known as function borrowing in JavaScript.

//syntax 
//bind(thisArg, arg1, arg2, /* …, */ argN)

const data_1 = {
    name: "sumit",
    age:"28",
    msg: function(){
        return this.name + " " + this.age;
    }
}

const data_2 = {
    name:"Naman",
    age:"45"
}

const result = data_1.msg.bind(data_2);

console.log(result);

