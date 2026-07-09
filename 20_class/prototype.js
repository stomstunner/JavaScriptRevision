let myHeros = ['spiderman', 'thor']

let heroPower = {
    thor : 'hammer',
    spiderman : 'jaal',

    getHeros : function(){
        console.log(`This is : ${this.thor}`);
        
    }
}

// we want ki ek aissa prototype ho jo har ek function, object me present ho so we can make it by appliyning the prototype on the Main ObJECTS

Object.prototype.ujjwal =  function(){
    console.log(`This is ujjwal in main object`);
    
}

// so this ujjwal prototype methid is presnt in the top level of the object 
myHeros.ujjwal()



