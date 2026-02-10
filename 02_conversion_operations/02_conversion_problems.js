let vlaue = null
console.log(typeof(vlaue))
// now we try to convert it into a number
let null_num = Number(vlaue)

console.log(typeof(null_num)) // number hi aa rha hai kyuki hamne usko convert kiya hai number me 

// now we try to print this null_num uske ander kya hai 
console.log(null_num) // answer me zero aa rha hai 

// now we try to this things with undefined

let value_new = undefined
console.log(typeof(value_new));

let value_num_undefined = Number(value_new)
console.log(typeof(value_num_undefined)); // number 
console.log(value_num_undefined); // NaN aa rha hai undeined ko number me change karnae ke baad 


//  same ager ham string ko bhi number me convert karne jate hai aur uske ander koi alphabet hai toh uska type toh hame dikhta hai ki number hai but when we  are going to print then we get the answer of NaN 




