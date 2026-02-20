// here we revise about functions 
// declere and initilazzation 
function sayMyName() {
    console.log("ujjwal 1");
    console.log("ujjwal 2");
    console.log("ujjwal 3");
    console.log("ujjwal 4");
    console.log("ujjwal 5");
    console.log("ujjwal 6");
}

// important thingh ki hamra bass naame jo hai sayMyName me bass refrence store hai 
// aur jab ham usme ( paranthiese()) laga dete hai toh uska matlab hai usko execute karna 

// sayMyName() // calling the function

// add two number

function addTwoNumbers(num1, num2) {
    // this is the parameter 
    // here we do not have to write the data type of the varibale
    console.log("The addition of " + num1 + " and " + num2 + " is: " + (num1 + num2));
}

// lets call the fun and pass the argument 
// addTwoNumbers(3,5)


// lets do the basic returning of the functions 
function add_num(num1, num2) {
    console.log(num1 + num2);

}
let sum = add_num(4, 6)
console.log("result : ", sum);

// 10
// result :  undefined
// we got this answer because we are not retuering from the function and we are storing the result of function in a varibale then it is undefined 

// so we can write it in a anoter way by just returng the sum to the funtion call rather than ki ham function me hi print karwa rahe the 

function new_add(num1, num2) {
    let result = num1 + num2
    return result
    // or return num1 + num2
}

let sum2 = new_add(4 , 6)
console.log("sum : ", sum2); // sum :  10
