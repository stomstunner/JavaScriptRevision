//  when we declere a object by the use of constructor then our object become the singltion and we declere it normally by litrall method then it become non singloton

const user = new Object();
// console.log(user); // empty object // singleton x


const user2 = {}
// console.log(user2); // empty object // non singloton 

// lets see how we can put vlaues in the objects basic 

user2.name = "ujjwal kumar"
user2.id = 1324547
user2.age = 21
user2.email = "ujjwal@google.com"

// lets print it 
console.log(user2);

// lets make another object 
const one = {
    userAge : 21,
    email: 'ujjwal@google.com',
    // now we can further make object in it 
    userFullName : {
        fullName : {
            firstName : "Ujjwal",
            lastName : "Singh"
        }
    }
}

// now we can jsut use the dot operator to go inside the object and access import PropTypes from 'prop-types'
console.log(one.email);
console.log(one.userFullName.fullName.firstName);
console.log(one.userFullName.fullName.lastName);



// console. log(regularUser. fullname. userfullname. firstname) ;

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj6 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // same array ke anser array wla  problem

// better method 
// const obj3 = Object.assign(obj1, obj2) 

// we have to pass object in it
// it jsut chagne the obje1 and object 2 to sote it into object 3

// but the better pactice it to we sholud pass a empty curlly bracket in parameter 

const obj3 = Object.assign({}, obj1, obj2); // garentted ki hame ek object hi milega 
// isme hota kya hai ki jo hamra 1st curlly barcket hota hai woh ban jata hai target  aur baaki sab varibale source ban jate hai 

console.log(obj3);

// but the best concept to add it spread operator 
const obj4 = {...obj1, ...obj2, ...obj6} // we have to add the diffrent memeber matlab uska naam of key diffrent hona chaiye 

console.log(obj4);








