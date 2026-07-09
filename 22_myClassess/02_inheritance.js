class User {
    constructor(username) {
        this.username = username

    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        // User.call(this, username)
        super(username)
        // so yaha pe inner the hood me hamre pass wohi call keyword jaissa kaam ho raha hai jaha pe this aur user name ko pass kar rehe hai aur fir class user hamre iss wale username ko refer karta hai data bharne ke liye 
        this.email = email
        this.password = password
    }

    // make a dummy function 
    addcourse(){
        console.log(`This course was added by ${this.username}`);
        
    }
}

// lets make a teacher 
let teacher1 = new Teacher('ujjwal','ujjwal@gmail.com','strongpassword')
teacher1.addcourse()