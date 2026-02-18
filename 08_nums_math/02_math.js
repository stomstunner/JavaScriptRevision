// in js we have builtin math librery
console.log(Math.abs(45));
console.log(Math.abs(-45));
console.log(Math.abs(-0));
// absolute give the positve values

console.log(Math.round(34.78));
// it gives just the not decimal values
console.log(Math.ceil(45.1));
// alwas gives the uper integer 
console.log(Math.floor(40.9));
// always give the lower integer values

console.log(Math.sqrt(4));
// this is square root 

// we can find the minimum of a list 
console.log(Math.min(2,6,8,4,5,6,1));
console.log(Math.max(2,6,8,4,5,6,1));


//  another the most important operation in math is maht.random()
// it gives the values between 1 and 0 
console.log(Math.random());

//  but if want a range ki uske bich me hi hameasha vlaeu aaye then ham ye kar sakte hai 

console.log(Math.random() * 10);
// ishma ham hameasha hi 0 aur 10 ke bich ka vlae laa sakte hai but 0 bhi aa sakta hai toh usko avoid karne ke ham usme +1 kar sakte hai 

console.log((Math.random() * 10 )+ 1);

// and we can get a 1 degit random values
console.log(Math.round(Math.random() * 10 + 1));




// now if want ki ham ek rnage ke bich me se number randmolly pick kare uske liye ham ye formulla use kar sakte hai 
let min = 10
let max = 20 
// these are given

// num we make a formulla
console.log(Math.floor(Math.random() * ((max - min )+1) + min ))

//  we sould use the floor because if we use the round then we are adding 1 in max - min +1 iske karan kabhi kabhi 1 jayda aa rha hai max se bhi 
// Math.random()  produce random num bet 0 and 1
// ((max - min )+1) this is just act as the 10 // very important if we ki hame outer range aur lower rnage ke bich me num ko lana hai 
// + min very important kyuki ye hame minimum toh ek range de hi raha hai 

