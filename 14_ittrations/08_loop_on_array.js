// lets see ki hamra array ko print karne ke liye kon sa loop best hai 

const arr = ['Ujjwal', 'Nirmal', 'Ujjwal1', 'Nirmal2', 'Ujjwal2'];
for(const key of arr){
    console.log(key);
    // as we can see ki hamra jo for of loop hai usme direct hi hamra value print ho jata hai 
}

for(const key in arr){
    console.log(key);
    // but in the for in loop we have only the index number of the array // only the integer
}

// but if we want to print the vlaue of the array then we have to use the array method

for(const key in arr){
    console.log(arr[key]);
    
}
