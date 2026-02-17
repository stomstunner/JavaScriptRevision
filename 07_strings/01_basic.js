// intilization
let name = "ujjwal"

const name2 = new String('ujjwal')
// dono same hi hota hai bass console window pe hame prototype dekh sakte hai ager hame new keyword ka use karke object type me string decleare kiya toh
console.log(name2[0]); // we can use the indexing in the index 


//  we have multiple function / defination / method that we can use for the string manipulation 
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length); // it gives the answer of 6 count each charater of the string

//  we can gicnd ki index deke uske index pe kon sa value hai 
console.log(name.charAt(2)); // j

//  we can find the index of a character 
console.log(name.indexOf('j')); // it gives the first index pe like ager dupllicate position pe hai toh ye first position pe jo aaya hoga uska position dega 

// lets learn about the substring
const newName = name2.substring(0,3)
// we have to pass the starting index and the ending index and the ending index is not included
console.log(newName); // ujj

// now we use the trim method 
// isme ham starting and end ke sabhi splace ko trim kar dete hai
const user = new String("    ujjwal   ");
const user2 = "    nirmal     "
console.log(user.trimEnd());
console.log(user.trim());

// lets see the use of replace
const url = "https://ujjwal.com/ujjwal%20singh"
// now we want ki ham ye url me se %20 ke place pe - laga du 
console.log(url.replace('%20','-')); // what we want to remove and what we want to place on it 

//  we can find ki koi bhi keyword present hai ki nahi string me 
console.log(url.includes('ujjwal')); // true 
console.log(url.includes('kumar')); // false


//  we can convert the string line into array based on some seperator
let line = "Ujjwal is a very good boy"
// let arr = line.split(" ") this doesnot works
console.log(line.split(" "));
console.log(line.bold());


// let arr="";
// for (let i = 0; i < line.length; i++) {
//     arr = line.valueOf(line[i])
// }
// console.log(arr);










