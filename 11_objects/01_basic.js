// lets see how we declere a object we have a 2..3 option
// singlton // when we use the constructor 
// literal
// constructor

// simple objects 
const user = {
    name : "Ujjwal",
    age : 21,
    class : "BCA",
    email : "ujjwal@google.com",
    isLoggedIn : true,
    lastLogin : ["Monday","wednesday","sunday"],
    "Full Name" : "Ujjwal Singh" // here the key is explicity written in string
}

// we have two ways to access the memebers of the objects 
// console.log(user.email);
// internally the email is also a string but we say it is a key and its vlaue is ujjwal@google.com 

// 2nd method is more professional 
// we have to write the object name then bracket then inside the bracket we have to write the key name in an string

// console.log(user["email"]); 
// // this method is works on every types of the key but not on symbol because on the symbol we have to remove the string wala comma from the varibale

// console.log(user["Full Name"]);


// ==================================================
// if our object contain a symbol then we have to use ths other way to access beacuse if we just access the symbol varibale it will we a strig only 

let mySymbol = Symbol("ABC")


const user_two = {
    name : "Ujjwal",
    mySymbol : "12345",
    age : 21,
    class : "BCA",
    email : "ujjwal@google.com",
    isLoggedIn : true,
    lastLogin : ["Monday","wednesday","sunday"],
    "Full Name" : "Ujjwal Singh" // here the key is explicity written in string
}

// console.log(typeof user_two.mySymbol); // it is a string
// console.log(typeof user_two["mySymbol"]); // it is a string

// because the symbolvarible is not written propery in the object 


// let mySymbol = Symbol("ABC")
const user_three = {
    name : "Ujjwal",
    [mySymbol] : "ABC", // here we refer to upper symbol
    age : 21,
    class : "BCA",
    email : "ujjwal@google.com",
    isLoggedIn : true,
    lastLogin : ["Monday","wednesday","sunday"],
    "Full Name" : "Ujjwal Singh" // here the key is explicity written in string
}
// console.log(typeof user_three[mySymbol]); // i get the string in the answer because the string is stored by the symbol if i just prin the type of mySymbol then i can get the symbol data type 



// let see ki ham vlaues ko acess karte hai aur unko overwrite kaisse karte hai aur overwrite karne se rolkte kaisse hai 

// access 
console.log(user_three.email);
// change 
user_three.email = "ujjwal@chatgpt.com"
console.log(user_three.email);
// remove changing to it make it freeze  the whole object 
Object.freeze(user_three)
// now if we are going to change then it wont happen
user_three.email = "ujjwal@microsoft.com"
console.log(user_three.email);





