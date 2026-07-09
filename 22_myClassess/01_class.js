// lets make the class with the class keyword 
class user{
    // lets make the constructor 
    constructor(username, email, age, password){
        this.username = username;
        this.age = age;
        this.email = email;
        this.password = password
    }

    // now we can make the fucntion that return some password with the string attached 
    encryptPassword(){
        return `${this.password}abcd`
    }
    // lets make an another method 
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// lets make the object
const userOne = new user("ujjwal",'ujjwal@gmail.com',21,"passwordstrong")
// lets call the encrypt pasword and see that ki ham return kya kar pate hai 
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());



// so if we want to do this same work without the help of class then we can use the function and protoyeing 
function userfun(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

// now we can make the prototying on the userfun 
userfun.prototype.encryptPassword = function(){
    return `${this.password}abcdefgh`
}
// and another property also 
userfun.prototype.changeUsername = function(){
    return  `${this.username.toUpperCase()}`
}

// now if we call the function then 
let user1 = new userfun('ujjwal','ujjwal@gmail.com','ujjwalStrong')

// now if i want to call that property for the user1 
console.log( user1.encryptPassword());
console.log( user1.changeUsername());
