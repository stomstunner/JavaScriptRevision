// for of loop 
let arr = [1,2,3,4,5,6]
// console.log(arr);

// for of loop is not only for object it refers to any ittratable things
for (const val of arr) {
    // console.log(`The value is ${arr[val]}`);
    console.log(val); // this is correct 
}

// lets use this in sting
const greetings = "Hello World!"
for(let greet of greetings){
    console.log(`Each letter is "${greet}"`);
    
}


