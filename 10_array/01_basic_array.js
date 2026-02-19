// here we see about the basic of array 
let arr = [1,2,3,4,5,6,7]
// console.log(arr);

// construrctor / object way of initilizing 
let objArr = new Array(1,2,3,4,5,6,7)
// console.log(objArr);

// we can perform multiple operation on it 
// console.log(arr[0]); // gives 1st element

arr.push(30);

// console.log(arr); // 30 at end

arr.pop()

// console.log(arr);
// remove 30 from end 

///////////////////////////////////
// lets study about the diffrence btw slice and splice
// slice 
let num1 = [1,2,3,4,5,6,7]
let num1_out = num1.slice(1,5) // it store the element from 2nd index to 5th index(last one in not includeing) ..just store ...not change in the original array 
console.log("A " + num1_out);
console.log("B " + num1);


let num2 = [1,2,3,4,5,6,7]
let num2_out = num2.splice(1,4) // it just not only store the 2nd index ele to 5th index ele (last one is incluede ) 
// but it also change the original array 
console.log("c "+ num2_out);
console.log(("d " + num2));






