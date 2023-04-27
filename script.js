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