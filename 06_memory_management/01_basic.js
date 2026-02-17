//  here we see the basic memeory management of the Javascript

//  premetive  = stack
//  all premetive data type are store in the stack memory 
//  stack  = data type in sequence but we can access the element from top only 
// like Number / String / Boolean / Null / Undefined / NaN / etc 
// it takes / store the copy of the previous values 

// example 

// let first  = "Ujjwal Kumar"
// let second = first 
// console.log(first); // ujjwal Kumar
// console.log(second);  // ujjwal Kumar
// //  both have the same data because the second storing the copy of 1st

let one  = "Ujjwal Kumar"
let two = one 
two = "Ujjwal Singh"
console.log(one); // ujjwal Kumar
console.log(two );  // ujjwal Singh
//  both have the diffrent vlaues because we cange the two ka vlaues explicityly




// TODO: learn about stack in js 

// non premetive datatype uses heap data structure 
//  like array / fucntion / objects 
//  it takes the refrence of the previsous value 

// example
let userOne = {
    email: "ujjwal@google.com",
    upiId: "ujjwal@yapl"
}
let userTwo = userOne
// now if we cange the usertwo ka koi bhi vlaue then we can change the userone ka bhi vlaue because the usertwo is refering to the same value that is same for userone 
// because it is store in heap memeory 
userTwo.email = "ujjwalsingh@google.com"

// now if we print the both me store email then we get the same email becuse the usertwo is refering to userone ka email
console.log(userOne);
console.log(userTwo);

