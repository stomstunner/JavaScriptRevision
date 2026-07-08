// when we pass andy data to the resolve(any things can be array, object and function )

//  it goes to the then  associated to the promise 
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username :'ujjwal', email : "ujjwal@gmail.com"})
    }, 1000)
})
// now we can get this data to my then 
promiseOne.then((user) => {
    console.log(user.username);
    // yaha ham resolve ke ander ke har data ko object maan rahe hai toh usko ham promise then ke parameter se uska ander ka username ko acces kar rahe hai 
})