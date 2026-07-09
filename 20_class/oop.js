// lets see the importance of constructor function 
function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // we can write the fucntion in that also 
    this.greeting = function () {
        console.log(`${this.username}`);

    }

    return this // when we are using the new keyword for making the instance then we  do not have to write the this keyword 

}

const user1 = new user('Ujjwal', 21, true)
const user2 = new user('Nirmal', 231, false)
// new keyword se har baar ek naya object create hota hai 
// console.log(user1);
// console.log(user2);

// if we talk about the cusntructor then it is the reference to the itself
console.log(user1.constructor);// so userone ka cunstrucntor call to itself class 



// prototype
function createUser(username, score) {
    this.username = username
    this.score = score
}
createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);

}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

tea.score()

// so we can inject our own prototpe into an fucntion like hamre pass jo fucntion creatuser naam ka hai uske ander ham ek prototype bhi inject kar sakte hai aur usko baad me use bhi kar sakte hai but dhayan rahe ki jab ham uss prototype ke ander rahenge to hame this keyword ka use karna hoga current context ko batane ke liye ki  jisne mujhe call kiya hai usak kaam karo and but jab ham object banayenge uska like chai toh hame chai ko batana hoga ki hamre jo createuser hai uske pass ek naya prototype aaya hai toh woh prtotype ko access ya banate ke liye hame new keyword ka use karna parta hai 
