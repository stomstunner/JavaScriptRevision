// here we study about destructors 
// when we have a key in an object aur usko hame baar baar use karna par raha hai apne code me then hame uska chota naam de sakte hai bass uska naam hi denge toh usse access kar sakenge na ki hame pura objectvaribalename dot and then memeber name likhenge 

const user = {
    name : "ujjwal",
    age : 21,
    university_name : "mmdu"
}

// now lets see ki muje university_name baar baar access karna parega toh mujhe baar baar dot ka use karna parega 

const {university_name} = user
// yaha pe hame kisse access karna chate hai usse ham  urlly barcket me likhenge aur kis object me se access karna chahate hai usse right side likhnge 

console.log(university_name);

// we can rename the university_name jsut for accessing 

const {name : n} = user 
console.log(n);
console.log(user);// rahega original original hi 



