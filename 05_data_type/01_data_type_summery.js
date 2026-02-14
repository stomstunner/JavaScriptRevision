// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt


// lets take the symbol example
const id = Symbol('123')
const userid = Symbol('123')
// both have the save data but both are diffrent because the symbol is used to take unique values 
console.log(id === userid); // false 

// we can make a number a bigInt by just writing n in the last of a value
const bigNumber = 12983453948573458374958n
console.log(bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Superman", "Batman", "Spiderman", "Ironman", "Thor", "Loki"]
const myObject = {
    name : "Ujjwal Singh",
    roll : 1324547,
    class : "BCA"
}
const myFunction = function(){
    console.log("Hello Javascript");
}
console.log(heros);
console.log(myObject);
myFunction()


