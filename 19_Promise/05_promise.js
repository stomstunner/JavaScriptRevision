// and at the end we run the finnally method ki hamra promise chal gaya hai puri tarah se 

new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error)resolve({username :'ujjwal', email : 'ujjwal@gmail.com'})
        
        else reject("ERROR OCCURRED!!")
    }, 1000)
}).then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=> {
    console.log('Promise is either resolved or rejected');  
})