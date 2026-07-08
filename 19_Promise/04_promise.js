// here we see ki ager hamre code me promise se error aata hai toh usko kaisse handle karege

const promiseOne = new Promise((resolve, reject)=> {
    setTimeout( () => {
        // now we think ki hamre pass error aaya hai 
        let error = true;

        // ager error nahi hai 
        if(!error){
            resolve({username : 'Ujjwal Singh', email : 'Ujjwal@gamil.com'})
        }
        // ager error hua toh 
        else{
            reject("ERROR! Something went wrong");
        }
    }, 1000)
})

// ab ham apne promise pe then method langene woh bhi chainnig me 
promiseOne.then( (user) => {
    // now i get the data that is in the resolve is in user but what if there is an error in the promis => rejected 
    // @ts-check
    // so i get the error from the reject
    console.log(user);
    // user store the error so i want the username form the user 
    return user.username
}).then((username) => {
    console.log(username);
}).catch( (error) => {
    console.log(error);
    // so if the error present = true the it preint aotherwise the privious prints   
})

// example for the error false

const promisetwo = new Promise((resolve, reject)=> {
    setTimeout( () => {
        // now we think ki hamre pass error aaya hai 
        let error = false;

        // ager error nahi hai 
        if(!error){
            resolve({username : 'Ujjwal Singh', email : 'Ujjwal@gamil.com'})
        }
        // ager error hua toh 
        else{
            reject("ERROR! Something went wrong");
        }
    }, 1000)
})

// ab ham apne promise pe then method langene woh bhi chainnig me 
promisetwo.then( (user) => {
    // now i get the data that is in the resolve is in user but what if there is an error in the promis => rejected 
    // @ts-check
    // so i get the error from the reject
    console.log(user);
    // user store the error so i want the username form the user 
    return user.username
}).then((username) => {
    console.log(username);
}).catch( (error) => {
    console.log(error);
    // so if the error present = true the it preint aotherwise the privious prints   
})

