// we have diffrent options to join the arrays 
// first one push 
// but the main problem with push operation is that the argumented array comes with a single element in a first array so we have a result of array of array and it do not return anything
let arr1 = [1,2,3]
let arr2 = [4,5,6]
// arr1.push(arr2)

// console.log(arr1); //[ 1, 2, 3, [ 4, 5, 6 ] ]


// and the second one is concat ...isme hame apne result me ek naya array milta hai jisse hame dusre array me store karna parta hai isme hame ek single array hi milta hai 



let arr3 = arr1.concat(arr2) //[ 1, 2, 3, 4, 5, 6 ]

// console.log(arr3);


// now the most relevent operator is spread operator 
// jisme hame har ek element ko seperatelly ek array me dalte hai like 1 glass me sare array ke ele the aur glass tut agya aur array ke ele spread ho gay 

let arr4 = [...arr1, ...arr2, ...arr3] 
//[ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6 ]
// we have to write  three dot then variable name .. and we can add as many variable we can 

// console.log(arr4);


// sometimes we have a array ke ander multiple array hota hai jisse hame flat karna hota hai ek single array me badlana hota hai uske liye hai flat() ka use karte hai 

let matrix = [1,2,3,[5,6,7],[5,6,9],73,89,7,[72,23,234,[234,234,234,],324],234,342,234]

// now we want ki hame iss array ko ek single array me convert kare 
console.log(matrix.flat(Infinity));// here we have to pass ki ham kitne ander tak usko flat karna chaate hai but we jsut can give infinity for all


