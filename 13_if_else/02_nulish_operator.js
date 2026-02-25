// here we discuss about the nulish coalescing Operator (??) : Unilt Null undefined

// it is used to assign variable for removing the error because of a variableis storing null or undefiend values

// sometimes when we make a program we declere a variable that store value from a api or database if connection failed then we got error becuse of null and undefiend vlaues strored in the variable
// so we give 2 or more values for the variable so whatever is written first that the variable will store except null and undefined 

let marks = 10 ?? 30
console.log(marks); // 10

let marks1 = null ?? 80
console.log(marks1);

let marks2 = null ?? undefined ?? 40
console.log(marks2);


