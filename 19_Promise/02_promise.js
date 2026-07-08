// we can write the promise method in 2 diffrent ways also although it do not need to store in  a variable 

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('Aysnc task 1');
        // joins then 
        resolve();
        
    }, 1000)
})

// apply the then method on the promiseOne 
promiseOne.then(function(){
    console.log('Async task 2');
    // it always runs after the resolve ..
})


// we can write the same thign in a more simpler way 


new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log('Task 3');
        resolve()
    } , 1000)
}).then( () => {
    console.log('task 4');
    
})