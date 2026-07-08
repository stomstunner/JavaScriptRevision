// so yaha pe ham errors ko async await ke help se resolve kanre ka try karenge 
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = false;
        if(!error) resolve({username : 'ujjwal Kumar',password:'12345'})

        else reject("ERROR OCCURRED!!");
    }, 1000)
})

// then now we write the aynce code 
async function consumerPromiseOne(){
    try {
        const response = await promiseOne
        console.log(response.username);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumerPromiseOne()
