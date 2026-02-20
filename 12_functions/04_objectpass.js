// we can pass object as an argument when fucntion caliing
function handleObject(anyObject){
    console.log(`The username is ${anyObject.username} and the age is ${anyObject.age}`);
    
}
// .. now lets make an objects
const user = {
    username : "ujjwal",
    age : 21
}

// and now if we call it 
handleObject(user)
// we can call the funtion directy making the object while calling 
