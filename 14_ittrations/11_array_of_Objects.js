// here we create a array of objects and we are trying to access the everythings in that array of abjects ke elements 

myObjects = [
    {
        studentName : 'Ujjwal',
        rollNumber : 1324547,
        class : 'BCA',
        cgpa : 9.23
    },
    {
        studentName : 'Nirmal',
        rollNumber : 1324548,
        class : 'BCA',
        cgpa : 9.99
    },
    {
        studentName : 'Rahul',
        rollNumber : 1324589,
        class : 'BCA',
        cgpa : 7.23
    }
]

// now we try to access the each objects ka name and the roll number 
myObjects.forEach( (item) => {
    console.log(item.studentName, item.rollNumber);
    
    // we can access the each objects inner elements by using the dot operator because we are telling ki har ek object inside the array is an item 
})