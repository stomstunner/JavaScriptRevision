//lets apply loop on maps
let map = new Map()
map.set('Name', 'Ujjwal')
map.set('Age', '21')
map.set('Class', 'BCA')

// console.log(map);

// lets apply for of loop on the map
for(let keys of map){
    console.log(keys);
// this gives us a array for each key and its value   
}

// lets use another syntax for better result 
for(let [key, val] of map){
    console.log(key + " -> " + val);
}
