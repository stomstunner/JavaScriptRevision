// here we see ki kaisse ham object ko manipulate and access karte hai jab hamra data api se aata hai toh

// hamra data jo api se aata hai woh in the form hota hai array of objects
// lets make a array of objects 
let user = [
    {
        name : "ujjwal",
        email : "ujjwal@email.com"
    },
    {
        age : 21,
        roll : 1324547
    },
    {
        class : "BCA",
        name_of_university : "XYZ"
    }
]

//  we can access the each array element by just using the indexing of the array 
let updated_user_email = "updatedEmail@gmail.com"
user[0].email = updated_user_email
console.log(user);


// we can see all the keys of the objects at once and same for values 

const obj = {
    name: "ujjwal",
    age : 21,
    class : "BCA"
}





console.log(Object.keys(obj)); //[ 'name', 'age', 'class' ]
console.log(Object.values(obj)); //[ 'ujjwal', 21, 'BCA' ]

//  we can see hamra data type array hai so we can put loop on them 

// objects . entries hamre objects ko array ke ander toh bananta hai but hamre har ek key vlaue ko ek array ke ander daal deta hai 


console.log(Object.entries(obj));
// [ [ 'name', 'ujjwal' ], [ 'age', 21 ], [ 'class', 'BCA' ] ]


//  we can find hamre objects ke ander koi key ke naam daal ke property hai ya nahi 
console.log(obj.hasOwnProperty('name'));
// it gives boolen result























