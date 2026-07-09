// lets make a class 
const user = {
    username: 'ujjwal',
    age: 21,
    isSigned: true,

    // now we make the method inside the class 
    getUserDetails: function () {
        console.log(this);

    }
}

// console.log(user.getUserDetails());

// lets try to understand why we use the constructur 
// becasue if we have a class or any fucntion and we try to pass the agrument in the fucntion where it recieve the parameter and store in its attributes/ variable but again if we try to pass the another argument then it overwrite the privious one  

function userOne(username, loginCount, isLoggedIn) {
    // now we use the this keyword to tell js that we wre talking about the current context 
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // now we can simply return the this for full current context 
    return this 
}

// lets make a user 1 
const user1 = userOne('ujjwal','43',true)



// console.log(user1);

// but if we make the another user2 then it override the previous value 
const user2 = userOne('nirmal','34',false )
console.log(user1.username);// so we can see ki user1 ke username me nirmal aa gya jabki ujwwal tha user1 username me

