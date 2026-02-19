// here we use the function and access the members of object in fucntions 
//  we can treat  the fucntion just like a varible in the js 
// lets create a object first 

const user = {
    name: "Ujjwal Singh",
    age: 21,
    class: "BCA",
    email: "ujjwal@google.com",
    roll: 1324547
}

// lets create a fucntion this is in the user object

user.fun1 = function () {
    console.log("This is a test");
}
user.fun1() // when we just call the function then there is no error og undefined 

// now we can print the funtion1 
console.log(user.fun1());

console.log(user); // here we can see ki hamre pass ek function naam aka bhi member hai insde the object 

// if we want to access the members of a objects by the fucntion that is also in the object we have to use the (this) keyword 

user.fun2 = function () {
    console.log(`Hi Mr. ${this.name}`);
    //  we can acces the inside member with the help of this keyword but we have to write the things in the backtik  
}

// now if we wnat to print the fun2 then
console.log(user.fun2());





