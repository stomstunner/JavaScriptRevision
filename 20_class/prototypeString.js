// here we want to make a prototpye on the string ki hmare pass jo string hai usme mai koi prototpye propterty laga du jisse uska true lenght mil jaye >> lenght after trimming the extra space  

let name = 'ujjwalkumar     '
// now we make a fucntion on the main string ki tum main string me ke property ko add kar do 
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The True Length is: ${this.trim().length}`);
    // this me hmare pass current call kiye hue ka vlaue aa rha hai jaisse = 'ujjwal kumar ' ager kisi dure ne call kiya hoga toh usak vlaue aayeha 
    // this matlab jisne call kiya hai 
}

// now we call the function see what happens 
name.trueLength()

// now we can apply this property on any string 
'niraml    '.trueLength()