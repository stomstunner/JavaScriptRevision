//  here we are going to learn about explicit type conversion
let score  = "33"

console.log(typeof score);
console.log(typeof(score));

// now we want ki hamara jo score hai woh number me badal jaye

let score_num = Number(score) // hmare hamesha capital me Number ka first letter likha hai kyuki woh ek class hai 
console.log(typeof(score_num));


// in javascript aer koi value hai aur woh number me convert nahi paa rarhi hai toh type nikalne pe uska answer NaN aata hai means not a number 
let marks ="234ac"
console.log(typeof(marks));
// now we convert this value to a number
let marks_num = Number(marks)
console.log(typeof(marks_num)); // ab yaha pe number aa rha hai answer
console.log(marks_num); // but jab ham print karwane ka try karte hai toh woh NaN aa jata hai




