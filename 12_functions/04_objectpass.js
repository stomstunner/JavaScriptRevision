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

handleObject({
    username: "nirmal",
    age : 18
}) // but we should be very casefull ki hamra key ka naam of objects should be same as function ka varibale 

///////////////////////////////
// lets see ki ham array ko kaisse pass karte hai as a argument aur usse kaisse ham function me access karte hai 

function returnSecondValue(anyArray){ 
    // fun receve the whole array and access by its parameter
    return anyArray[1]
}

let arr = [12,22,34,220]
console.log(returnSecondValue(arr)); // here we pass array in a function 

// we can also pass array directly to the function calling 
console.log(returnSecondValue([9,8,7,6])); // 8

