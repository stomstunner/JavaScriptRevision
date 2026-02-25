// lets discuss about the arrow fucntion  
//  () => {}  yes this is the arrow function  
//  we can hold the arrow function in any other variable also 

// function user(){
//     let username = "ujjwal;
//     console.log(`Hello ${username}`);
    
// }

// so that is just a arrow fucntion but we do not write the fucntion name and and keyword and store it in a varibale  


let user = () => {
    let username = "Ujjwal";
    console.log(`Hello ${username}`);
    
}
// user()

// lets make a simple fucntion and then we convert it into arrow fucntion 
function addtwo(num1, num2){
    return num1 + num2
}

console.log(addtwo(4,6));

// lets convet it into a arrow fucntion 

let addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,5));

// and we can use the implicit return 
// same fucntion ko hi ek line me likh ke return keyword ko hata dena  

let add_Two = (num1, num2) =>  num1 + num2
// let add_Two = (num1, num2) =>  (num1 + num2) 
// when we write curlly bracket thennwe have to write the return otherwise while using prantihisis then we do not have to write the return 
console.log(add_Two(68,6));



/// so why we use the pranthaesis because when we want to return object then we cannot jsut write a curllybracket

// let msg = (num1, num2 ) => {username : "Ujjwal"}
// // this is wrong 
// console.log(msg(4,6)) // undefined 

let msg = (num1, num2 ) => ({username : "Ujjwal"})
// this is wrong 
console.log(msg(4,6)) // it returns a objects  

