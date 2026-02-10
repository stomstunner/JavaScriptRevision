// here we see the conversion practice on boolean value 
let isLoggedIn = 1

let num_to_bool = Boolean(isLoggedIn)
console.log(typeof(num_to_bool)); // boolean

// now we print the value
console.log(num_to_bool); // true 

// now we  check for string empty and full strings 
let value = "abc"
let str_to_bool = Boolean(value)
console.log(typeof(str_to_bool));
console.log(str_to_bool);
 // it gives false for empty string 
//  and it gives true for value in the string 



