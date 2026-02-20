// here we learn about rest oprator in function 

function number(...nums){
    return nums 
}
console.log(number(200, 300, 400, 321)); // the rest operator bind all the agument and store it is as a  array and it also return a array  

function number2(val1, val2, ...nums){
    return nums 
}
console.log(number2(300,400,500,600)); // now the nums store the rst of the laue the first argument to the the first parameter and so on and jab ham rest operator ka last me use kar lete hai toh saare bacha hua number usi me store ho jata hai 
// rest operator ke baad hame koi aur parameter nahi daal skate hai  



