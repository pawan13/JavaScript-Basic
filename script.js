// console.log("hi there, thank you")

// // declaring the variables
// var name = "Pawan"
// let address="Nicholls, Canberra"
// const dob="12-23-1990"

// console.log(name)
// name="Pawan Siwakoti"
// console.log(name)

// // dob="13-23-1903" const cannot be changed

// Operators 
// Arithmetic 

// let a=5
// const b=6

// const add = a+b
// const sub = a+b
// const mul = a*b
// const power = a**b
// const div = a/b
// const mod = a%b

// console.log(add)
// console.log(sub)
// console.log(mul)
// console.log(power)
// console.log(div)
// console.log(mod)

// a++ //increment
// a-- //decrement

// console.log(a)


// // Comparison
// const v1 = 5
// // const v2 = "5"
// const v2 = 5

// // const result = v1 == v2 // compares the value
// // const result = v1 === v2 // compares the value and datatype

// // const result = v1 >= v2
//  const result = v1 <= v2
// console.log(result)

//data types
//primitive 
// String "Pawan"
// number 123
// boolean true or false
//undefined   no reference in memory
// null   reference in memory but no value assigned.


// Reference 
// refernce data type takes data by reference unlike the primitive that holds value.
// object
// let person1 ={name: "prem"}
// console.log(person1.name)
// let person2 = person1
// person1.name="sam"
// console.log(person1.name, person2.name)

//array
//function

//Math Object
// const val = Math.PI
// const val = Math.round(4.7)
// const val = Math.floor(4.7)
// const val = Math.ceil(4.1)
// const val = Math.pow(8,2)
// const val = Math.sqrt(64)
// const val = Math.round(4.7)
//const val = Math.random(); //0-0.9999999999
// const val = Math.min(23, 45, -76)
// const val = Math.max(23, 45, -76)
//console.log(val)


// logical Operators
// Conditional statements
//Conditional operations 
// const age = 18

//if condition
// if(age < 18){
//     console.log("go home kido")
// }

//if else
// if(age >= 18){
//     console.log("go home kido")
// }
// else{
//     console.log("welcome to the club")
// }


//else if
//  const pet = 'cat'

// if (pet === 'cat'){
//     console.log("meow")
// }
// else if (pet === 'dog'){
//     console.log("woof")
// }else if (pet === 'cow'){
//     console.log("mooooow")
// }
// else {
//     console.log("ho ho horoo horooo")
// }

//Ternary 
//  const age = 17
// age > 18 ? console.log("welcome to party") : console.log("go home kiddo")

// const pet = 'cow'
// const g = 'f'

// if (pet === 'cat' && g ==='f'){
//     console.log("meow")
// }

// if (pet === 'cat' || g ==='f'){
//     console.log("meow")
// }

// truthy  value : "p", 4, true, {}, [], ()=>{}  => true
// falsely value :"", 0, undefined, null, false => false

// if(pet){
//     console.log("we have pet")
// }


//Switch
// const pet = 'cat'

// switch (pet) {
//     case 'cat':
//         console.log("meow")
//         break;
//     case 'dog':
//         console.log("woof")
//         break;
//     case 'cow':
//         console.log("moooow")
//     default:
//         console.log("ho ho hooro")
// }

// Error Handling 

// try {
    // throw new Error("ER0494");
//     console.log("within try", s)
// } catch (error) {
    // if (error.message === 'ER0494'){
    //     //email
    // }
//     console.log("within error", error.message)
// }finally{
//     console.log("within finally")
// }

// Scheduling 
// setTimeout 
// console.log("before set time out")

// setTimeout(()=> {
//     console.log("Inside set time out")
// }, 3000)

// setInterval
// let i =0

// const interval = setInterval(() => {
//     console.log("inside the interval", i++)
//     if(i == 10){
//         clearInterval(interval)
//     }
// }, 1000);

//Functions 
// console.log("before function")
//  function add(){
//     console.log(4 + 6)
//  }
//  console.log("after function")
//  console.log(add())

// function add(a, b){ // a and b are arguments
//     return a + b
// }

// const ans = add(5,6) // 5 and 6 are parameters
// console.log(ans)
// const ans2 = add(12,6) 
// console.log(ans2)

// ES 6
// let - local scope, Const 

// Arrow function
// const add = (a,b) => {
//     return a+b
// }

// const multiplayer = (a) => a * 5

// Temperal literal
// const bio = (name, address) => {
//     //  return "hello, I am " + name + ". And I live in " + address
//     return `
//     Hello, I am ${name}. And I live in ${address}`
// }

// const pawan = bio("Pawan", "Nicholls")
// console.log(pawan)


// loops for, while, do/while

//For loop
// for(let i=0; i<=10; i++){
//     console.log(i)
// }

//while loop
// let i=0;
// while(i<= 10){
//     console.log(i)
//     i++
// }

//do while loop
// let i=0
// do{
    
//     i++
//     if (i % 2 == 0){
//         continue 
//     }
//     console.log(i)
// }while(i<=100)

// Data manipulation 

//Number - ParseInt, Float
//safe number  -2^58 -1 to 2^53 -1
//NaN => not a number isNaN

// const val = isNaN(5)
// const val = isNaN("nani")
// console.log(val)

//Number
// const num = "5.04w"
// const val = Number("9876")
// console.log(typeof(val))
// const val2 = parseInt(num)
// const val3 = parseFloat(num)
// console.log(val2)
// console.log(val3)

// String
// const str = "Hi there, My name is Pawan, I live in Nicholls"
// console.log(str)

// const val =str.length
//  const val =str.toUpperCase()
//  const val =str.toLowerCase()
//  const val =str.indexOf("n")
//  const val =str.replace("i", "I")
// const val =str.replaceAll("i", "I")
// const val =str.substring(4, 8)
// const val =str.slice(4,8)
// const val =str.slice(4)
// const val =str.includes("pawan")
// const val =str.charAt(6)
// const val = str.charCodeAt(21)
// const val = str.split(",")
// const val =str.search("Pawan")
// const val =str.search("pawan")

// console.log(val)

// Array
// const fruits = ["banana", "mango", "apple"]
// console.log(fruits[1])
// console.log(fruits[10])

// const data = fruits.length
// const data = fruits.unshift("watermelon")
// fruits.unshift("watermelon")
// const data = fruits.push("mango")
// fruits.push("mango")
// const data = fruits.shift()
// const data = fruits.pop()

// const data = fruits.slice(1,3)
// const data = fruits.splice(1,3)
// const data = fruits.splice(1,0, "strawberry")
// console.log(fruits, data)
//first value determines first value and 2nd determines number of items.

// console.log(fruits)
// fruits.sort() // compares only first character
// fruits.sort((a,b) => a-b) // used in numbers for compiring numbers
// fruits.reverse()
// console.log(fruits)
// console.log(data)

// =======Array lopps
//  const fruits = ["apple", "banana", "orange", "mango", "mandarin"]
// forEach
//   fruits.forEach((item, i) =>{
//     console.log(item, i)
//   });
// forEach loops item

//map
//   const newArg = fruits.map((item, i) =>{
//     return "CODE-" + item.toUpperCase();
//   });

//   console.log(fruits, newArg)
  // map loops items + helps to reurn same size of array

//filter
// const newArg = fruits.filter((item,i) =>{
//     return !(item.includes('m'))
// });

// filter loops items + helps to reurns array with the true items

// //Find
// const newArg = fruits.find((item, i)=>{
//     return item === "orange"
// })
// // find loops items and return arrays first matching data

//Every
// const newArg = fruits.every((item, i) =>{
//     return item.includes("o")
// })
// every loops items and return boolean value
// console.log(fruits, newArg)

// const balances = [22, 34, 4567, 5678, 6544567, 345676543, 23]

// const total = balances.reduce((subtotal, number) =>{
//     return subtotal + number;
// }, 0)
// //reduce loops items and returns ..
// console.log(total)


// //  Challenge 
// //1. create an array of 50 random numbers range between 1 and 100 programatically 
//   const numbers = []
// for (var i=0; i<50; i++) {
//     numbers.push(Math.round(Math.random() * 100)+ 1)
// }
// console.log(numbers)


// //  2. sort the array in descending order

//  sortedNumbers = numbers.sort()
//  decendingNumbers = sortedNumbers.reverse()
//  console.log(sortedNumbers)

// //  3. get the total value of the array
// const total = numbers.reduce((subtotal, number) =>{
//         return subtotal + number;
//      }, 0)

//      console.log(total)

// //  4. divide array into odd and even array
//    const oddArray = numbers.filter((item, i ) =>{
//      return !(item % 2 === 0)
//    })

//    const evenArray = numbers.filter((item, i ) =>{
//     return (item % 2 === 0)
//   })

//   console.log(oddArray)
//   console.log(evenArray)

// //  5. remove the duplicate value from the original array 

// const originalNumbers = numbers.filter((item, i)=>{
//     return numbers.indexOf(item) == i
// })

// console.log(originalNumbers)

//Challenge2:
//2. Create an array of 50 random unique numbers range between 1 to 100 programmatically.


let uniqueNumbers = []
 while(uniqueNumbers.length < 50){
    const number = Math.floor((Math.random() * 100) + 1);
    if(uniqueNumbers.indexOf(number) === 1){
        uniqueNumbers.push(number)
    } 
 }
 console.log(uniqueNumbers)

