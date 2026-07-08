// lets wrtite the fetch method with then and catch 

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => { return response.json()})
.then((data)=> {console.log(data);})
.catch((error) => { console.log(error);})

// ye ek super slik code hai jsime ham fetch se response laa rahe aua aher aaeya sahi hua then hamara 1st then chalega jisme ham apna jo bhi fetch se data aayega resolve ho ke usse then me daalenge aur fir usko ham return kar denge json me badal ke next then ko
// and jo hamra 2nd then hai woh hamre pure data ko lega json me badla hua aur usko print kar denga 
// fir hamara ager error aaye toh catch error ko lega aur usse print akr dega 