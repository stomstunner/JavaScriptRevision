// we can store a function in a varibale and we call that varibale a  expressing 
// noramlly 
function addone(num){
    return num + 1
}
addone(3) // we have to store it in a varible to print it or we can directly wite the line in a console log 


// but we can do this also 

const  addtwo = function(num){
                    return num + 2
                }

// we just hvae to write the function name as the varibale name and in rith side funtion keyword and parameter and logic 

// now we can print the ecpression function 
addtwo(6)


// but the mejor problem is ki ham 1st method e function ko declere karne se pahel hi call kar sakte hai then function ko declere kar sakte hai 

// but in the second method we have to first delcere the function then we have to call the function 

console.log(addone(3) );
//working
function addone(num){
    return num + 1
}
/////////////////

// console.log(addtwo2(4));
// // it gives error // because we cannot call before decleringing the literl types 
// const  addtwo2 = function(num){
//                     return num + 2
//                 }