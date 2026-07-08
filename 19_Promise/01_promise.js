// here we see how we can create a promise 
// promise is an object

// and in that created promise we have to give the fucntion that do some work . althothough the fucntion only resolve or reject the work

const fun1 = function (resolve, reject) {
    setTimeout(function(){
        console.log('Async fucntion runs');
        // we conect the resolve to the then 
        resolve()
        
    },1000)
}
const promiseOne = new Promise(fun1)

// now we make the then method to the created promise 1 

promiseOne.then(function(){
    console.log('then Called');
    
})