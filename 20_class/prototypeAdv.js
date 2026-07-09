// here we see ki kaisse ham ek object ka property dusre me daal sakte hai by using the prototype inheritance 

const teacher = {
    makevideo : true
}
const teachingStaff = {
    isAvbhilable : true 
}
const taSupport = {
    makeAssignment : 'jas Assignment',
    fulltime : true, 
    // we can give he access of the another object to this object by prototype inheritance 

    __proto__ : teachingStaff 
    // matlab ham tasupport ke prototpye me teaching staff ka inherritance de diye hai but ab ye outdated hai 
}

// although we can use the proto bahar of the object 
teacher.__proto__ = taSupport

// mordern syntax 
Object.setPrototypeOf(taSupport, teacher)
// tasupport ko do prototype ka access of the teacher object
