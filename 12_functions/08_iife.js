//IIFE = Immediately Invoked Function Expression
// it is used to invoked the function Immediately //used in database 

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()
// but we wanted to inved it immediatelly

// ()()
// first for the defination of the function and the last parnthisis is for the execution call 

(function wow1(){
    console.log(`Db connected`);
    
})();
// this is IIFE
// iife is used to remove the pollution of the global varibale kyuki woh pahle chalta hai so iife lagane se sabse pahle ye execute chalega  
    
// adn the important part is ki jsb hame do iffe likhte hai toh js ko pata nahi hota hai ki runkana kab hai toh uske stop kanre ke liye hame last me ek semicolon lagana chaiye

let add = ( (num1, num2) =>  (num1 + num2)
)(4,6)
// add(4,6)
console.log(add); // we can do that also 

// here we write a arrow fucntion and a iife in a line and we give 4,6 agrument in the same line 

