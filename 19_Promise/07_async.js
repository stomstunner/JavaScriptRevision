// lets make real life code for async function 
async function promiseMy(){
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        // jo response aayeha usse json me convert kanre me bhi time lagta hai toh uske liye bhi hame await lagana parta hai 
        const data = await  response.json()
        console.log(data);
        
    } catch (error) {
        // if any error comes then write here 
        console.log(error);
        
    }
}

// remember ki hame apne fucntion async ko call bhi karna parta  hai 
promiseMy()