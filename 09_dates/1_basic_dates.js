// console.log(Date.now());
// console.log(Time);

// let myDate = new Date()
// console.log(myDate); //2026-02-18T13:20:55.309Z
// console.log(myDate.toDateString()); //Wed Feb 18 2026
// console.log(myDate.toLocaleDateString()); //18/2/202
// console.log(myDate.toISOString()); //2026-02-18T13:24:28.347Z
// console.log(myDate.toTimeString()); //18:54:28 GMT+0530 (India Standard Time)  
// // console.log(myDate.toJSON(2));
// console.log(typeof myDate); // object




// we can declere date // custom date 
let myDate = new Date(2026, 1, 18)
// 2026 is the year 1 is the month // start from 0 // and 18 is the date 

console.log(myDate.toDateString());

// if we want ki hamd ate ke saath time ko bhi initilize kare then we have to use the tolocaleTIMEstring 

let date_time = new Date(2026, 1, 18, 19, 13) // it takes 24 hour system
console.log(date_time.toLocaleTimeString()); // only time now 
console.log(date_time.toLocaleString()); // date + time 


// lets see the yy-mm-dd formate
let custom_date = new Date("2026-02-18")
console.log(custom_date.toLocaleString());// by default it give the 5.50 time
console.log(custom_date.toDateString());// Wed Feb 18 2026


// in india we follow mm-dd-yyyy
let in_date = new Date("02-18-2026")
console.log(in_date.toLocaleString()); //18/2/2026, 12:00:00 am


// here we study about the datenow operationin in the js 
// it is useful when we have to findout ki abhi kya time ho rha hai     
let timeStamp = Date.now()
console.log(timeStamp); // it gives us a milisecond value that is from the 1970 januaray 
console.log(timeStamp); // it gives us a milisecond value that is from the 1970 januaray 
// we always get a diffrent vlaue 

// we want ki hamre pass jo normal time diya gaya hua hai usko convert kare 1970 ke milisecond me taki abhi ka time se compare kar sake 

console.log(in_date.getTime()); // this is the time of in date custom date 


// we can find the second of the now
console.log(Math.floor(Date.now() / 100)); // time in seconds


// we can get the hours/months/days
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());// wednesday
console.log(newDate.getMonth());// feb / start from 0
console.log(newDate.getMonth() + 1);// feb / start from 0
console.log(newDate);


// fr custom output of date newDate.toLocaleString
newDate.toLocaleString('default', {
    weekday: "long"
}
)











