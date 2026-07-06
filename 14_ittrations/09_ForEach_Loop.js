// here we use the most common type of the loop that is a higher order function = for Each loop -> and that function takes the call back function insite it 

const name = ["Ujjwal1", 'ujjwal2','ujjwal3','ujjwal4','ujjwal5']
name.forEach(function (item){
    console.log(item);
    // for writting the for each loop we have to use the  call back function where we do  not have to write the function name and in the defination section we have to write the normal code and in the parameter section we have to write the any varibale that will ittrate by itself only we do not have to give the and condition or etc 
    
})

// now we use the call back arrow fucntion in the for each loop 
name.forEach( (item) => {
    console.log(item);
    // here we just write the call back function but not name of the fucntion because in the call back fun we do not have to write the name of the fucntion
} )