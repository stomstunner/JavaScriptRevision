function SetUsername(username) {
    //complex DB calls
    this.username = username
    // so ham yaha khud ka this nahi use kar rhae hai balki bahar se jo this aaaya hai useme apne vlaue ko satore kare rahe hai 
    console.log(this);
    
    console.log("called");

}

function createUser(username, email, password) {
    SetUsername.call(this, username)
    // so the call gives the curernt context to the another fucntion 

    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);