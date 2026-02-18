// we can decleare number in a simple way and we can declere expleclity using the new keyword 
let num = 400
// this is a simple inititlization
console.log(num);


// but when we use the object mehtod then we have multiple prototype to use...operation for it 
const num1 = new Number(500)
console.log(num1);
// /we can see that ki hamara jo output hai woh ek object me aaha ahai aur jab ham console window pe isse print karwaenge toh hamra output me bahut sare protype bhi aayenge 

// one of the most important operation is ki ham ( toString method ka use kar ham pahle integer ko string me convert kar sakte hai then ham uspe string ke sare operation use kar sakte hai )

console.log(num1.toString().length); // 500 convert to string 

// we have a another operation to use that is (toFixed ) jisse ham vlaue ke baad decimal ke baad kitna number lena chaahte hai 

// num1 -> 500
console.log(num1.toFixed(3)); // we have to pass the vlaue ki hame kitne decimal palce tak vlaue chaiye 


let num3 = 600.6903
console.log(num3.toFixed(2))

// we have a method that is presion where it gives the values that is presise to the vlaue that ti on the left side of the decimal ..use it carefully


let num4  = 589.9897786675
console.log(num4.toPrecision(4));
// it convert 589.9 to 590 

// another opertion that is we can cahnge the big number to the us based money system and indean based numberal system
let hundred = 100000000
console.log(hundred.toLocaleString('en-US')); 
console.log(hundred.toLocaleString('en-IN'));










