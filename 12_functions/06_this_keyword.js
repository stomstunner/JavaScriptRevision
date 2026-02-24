// here we see about the this keyword 
// this keyword id used to refer the current context ka varibales  
// let us assume ki hamre pass ek user naam ka object hai jo ki bass user ko login karne pe hello ka massage deta hai 
let user = {
    username  : "Ujjwal Singh",
    email : "ujjwal@google.com",
    price : 999,

    // now i wanted to make a fucntion inside the object we can make and store in a key 
    welcomeMsg : function(){
        console.log(`${this.username}, welcome to website.`);
        
    }

}
// console.log(user);

// if we want to print the usermsg ke ander kya likha hai toh hame user and then dot and then attribute ka use kar sakte hai  
user.welcomeMsg() // this is the crrent way to do this 

// if we cange the usename then that username is visisble to the function 

user.username = "Nirmal"
user.welcomeMsg()
