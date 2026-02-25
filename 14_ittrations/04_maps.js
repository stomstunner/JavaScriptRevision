// maps are just like the object but it store the unique values and remember ki kon sa enteries kiss order me hua tha it is ordered

const map = new Map()
// we set keys and vlaues in map by using set method 
map.set('IN',"India") // first is key and the second in valus 
map.set('USA',"United States Of America")
map.set('Fr','France')

// not allowed 
map.set('IN','India')
// lets see ki map dikhta kaissa hai 
console.log(map);
