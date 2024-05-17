// Array.prototype.MYmap = function(cb) {

//     newArr = [];

//     for (let i = 0; i < arr.length; i++) {

//         newArr.push(cb(arr[i], i, arr));
//     }

//     return newArr;

// }

// const arr = [1, 3, 4, 5, 6];

// const myarr = arr.MYmap((num, i, arr) => {
//     return num * 3
// }
// );

// console.log(myarr);

// Array.prototype.myFilter = function (cb) {
//     let newArray = [];

//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this))
//             newArray.push(this[i])
//     }
//     return newArray;
// }

// console.log(arr.myFilter((ele,i,arr)=>ele>4)); 

// Array.prototype.myReduce = function (cb,initialVal) {
//     let accumulator =initialVal;
//     for (let i = 0; i < this.length; i++) {

//      accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
//     }
//     return accumulator;
// }

// console.log(arr.myReduce((accu, ele, i, arr) => accu + ele));

// Difference between map and forEach - map return new arr and we can chain other method after map like filter , forEach modify orignal arr and we cand chain othe method;

// const Students = [
//     { name: "Ayush", age: 20, marks: 80 },
//     { name: "priti", age: 17, marks: 70 },
//     { name: "Ram", age: 18, marks: 90 },
//     { name: "Rahul", age: 11, marks: 70 },
//     { name: "Abhi", age: 13, marks: 80 }
// ]

// const newStudents = Students.reduce((accu,ele,arr) => {
//   return accu+ele.marks;

// },0);
// const newStudents = Students.filter((ele,i) => {
//   return ele.marks>70;

// }).map(ele=>ele.marks=ele.marks+20).reduce((acc,curr)=>acc+curr);

// console.log(newStudents);



// const person={
//     name:"Ashok",
//     Age:24,
//     address:"ranchi",
//     print1:()=>{
//            console.log(this.name+" from "+this.address);
//     },
//     print2(){
//           console.log(this.name+" from "+this.address);
//     }
// }

// person.print1()
// person.print2()


// function printNum (){

//     for(let i=0;i<3;i++){
//        (function a(){ setTimeout(()=>{
//             console.log(i);
//         },1000)})()
//     }

// }

// printNum()


// function sum(a) {

//     return function (b) {
//         if (!b) return a;
//         return sum(a + b)

//     };

// }


// console.log(sum(1)(2)(3)(3));
