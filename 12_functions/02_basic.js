function userCalling(username){
    return `${username} just loggedIn`
}

// now we want to print it so we have to not only call the funtion but we have to write the calling in a console beacuse the function is retuering somthing
// console.log(userCalling("ujjwal"));

// what if we do not pass any argument in the function 

// console.log(userCalling());

// then we get the undefined value in palce of the varibale not the null 


// but we want to take care of this type of exception 
function userNameCall(username){
    if(username === undefined){
        console.log('Plese enter the username');
        return
    }
    return `${username} is loggedIn`
}

console.log(userNameCall());

// or  we can write the same if condition as 
//  (!username) // it means username not equal to true 
// (username) false  
// in js we assume ki hamra undefined is a false value
// but if we assume ki hamra username is flase means undefined 
// so write username jo ki abhi undefined hai matlab false hai false rahega toh ander jayega hi nahi so we make username to ulta by exclamanation marak

// another method to aboid empty argument is ki ham parameter me koi defalut vlaue de de hai apne vaibale prameter ko ager koi vlaue agrument se aayega toh usse overrite kar dega nahi toh defalut parameter me jo hai usse hi rint kar dega  

function calling_user(username = "Sir"){
    return `${username} just loogedIn`
}
console.log(calling_user());
