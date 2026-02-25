// here we see about the falsy values 
// falsey
// false, 0, -0, "", undefined, null, BigInt 0n, NaN

// Truthy 
// true, [], " ", 'false', {}, function(){}, '0'


// === check the values as well as type of data 

// if we want ki hamre array empty hai toh 
let arr = []
if(arr.length === 0){
    console.log('empty');
}

// and i wanted to check ki mera object empty hai ya nahi hai toh mai object ke key pe length method lagaunga

let obj  = {}
if(Object.keys(obj).length == 0){
    console.log("Object is empty");
    
}