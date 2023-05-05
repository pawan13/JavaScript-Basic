// Object -Oriented Programming (OOP)
// Object => properties, methods


// Class based OOP 
// class Person{

//     //constructor runs as soon as class is instantiated
//     constructor(fn, age){
//         //this is refering to the person object
//        this.firstName = fn//property
//        this.age = age// property
//     }
//     bio(){

//         // you could do a complex calculation
//         return `Hello, I am ${this.firstName} of age ${this.age} years old.`
//     }
// }
//  //Encapsulation, calling bio

// // Polymorphism 
// //instanciating process passing "prem"
// const pawanInstance = new Person("Pawan", 28)
// console.log(pawanInstance.bio())

//Inheritance 

// class Living{
//     constructor(name, dob, isMammal){
//         this.name = name, this.dob = dob, this.isMammal = isMammal}

//         bio(){
//             return `The person called ${this.name} was born on ${this.dob} and their mammal status is ${this.isMammal} `
//            }
// }
// class Human extends Living{
//    constructor(name, dob, isMammal, language){
//     super(name, dob, isMammal)
//      this.language = language
//    }
//    speaks(){
//     return this.bio() + `.${this.name} loves to speak in ${this.language}`;
//    }
// }

// class Animal extends Living{
//     constructor(name, dob, isMammal, ownerName){
//         super(name, dob, isMammal)
//       this.ownerName = ownerName
//     }
 
//     bio(){
//      return `The person called ${this.name} was born on ${this.dob} and their mammal status is ${this.isMammal} `
//     }
 
//     owner(){
//      return this.bio() + `.${this.name} belongs to Mr. and Mrs. ${this.ownerName}`;
//     }
//  }

// const pawan = new Human("Pawan", "02-11-1994", true, "English")

// const cat = new Animal("Billy","02-03-2020", true,"Koirala" )

// console.log(pawan.bio())
// console.log(cat.bio())

// Functional Programming 
//Side Effects, that cause some change in system

//Side Effects
// let total = 0
// const add =(a, b) => {
//      total = a+b
//      return total
// }
// console.log(add(4,5))


// Pure Function -> returns same output evertime same data is passed without side Effects is called pure function
// const add =(a, b) => {
//     return a+b
// }
// console.log(add(4,5))

// High Order Function a function that takes function as an argument or returns a function 
// const addAndSquare=(a,b)=>{
//     const total = a + b
//     const square = () =>{
//          return total ** 2
//     }

//     return square
// }
// //  let add = addAndSquare(3,4)
// // console.log(add())

// console.log(addAndSquare(3,4)())

// const add = (x, y) =>{
//    return x+y
// }

// // const calculator = (a,b,fun) => {
// //     return fun(a,b)
// // }

// const calculator = (a, b, fun) => fun(a,b)
// const dt = calculator(4, 5, add)

// console.log(dt)
   
// // Recursion -> function it calls itself

// let i = 0
// const increase = (val) =>{
//     i++
//     console.log(i) 

//     if ( i == 10){
//         return
//     }

//     increase()
// }

// increase()

// let ttl = 0

// const total = arg =>
// {
//     ttl += arg.pop()

//     if (!arg.length){
//         console.log(ttl)
//         return
//     }

//     total(arg)
// }

// const money = [34, 34, 456, 67, 8, 765, 43, 4, 56, 787, 33]

// total(money)