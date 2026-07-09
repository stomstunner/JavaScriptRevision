class User {
    constructor(username) {
        this.username = username;
        
    }
    // a simple method

    logMe(){
        console.log(`Username is : ${this.username}`);
        
    }
}

// lets make a inheritance wala class 
class Teacher extends User {
    constructor(username, password, email) {
        // now we call the super 
        super(username);
        this.password = password;
        this.email = email;
    }

    addCourse(){
        console.log(`This course is added by ${this.username}`);
        
    }
}

let teacher1 = new Teacher('ujjwal','strong','ujjwal@gmail.com')
// lets make a another object from user 
const user1 = new User('nirmal')
// can i use the method od teacher from user1 
// .. no 
user1.logMe()// Username is : nirmal

// we can see ki kon sa chiz kisse inheritance hua hai aur kon sa chiz kiska instance hai 
console.log(user1 instanceof User);// true 
console.log(teacher1 instanceof Teacher);
console.log(teacher1 instanceof User);

