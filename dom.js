// selecting the element from the dom 


// const elm = document.getElementById("first").innerHTML
// document.querySelector("#first")



//  const elm = document.getElementsByClassName("first")
// document.querySelector(".info1")
// document.querySelectorAll('.info')

// const elm = document.getElementsByTagName("div")

 const display = document.querySelector("#display")
// const dt = document.querySelector(".info1")

// document.write("heheheheh")
// console.log(dt.innerHTML)
//  console.log(dt.innerText)

// const elm = document.querySelector("a")
//  elm.setAttribute("style", "color: red")
// elm.setAttribute("href", "facebook.com")
// elm.innerHTML= "facebook"

// console.log(elm.innerText)

// elm.style.color="red"
// elm.style.textDecoration = "none"
// elm.fontSize = "3rem"
// elm.style.display="none"
// elm.style.display="block"


// elm.addEventListener("click", () =>{
//       elm.style.fontSize= "5rem"
// })


// write your name in display 

const elem = document.getElementById("display")


const reverse = () => {
    const str = elem.innerText
    console.log(str)
   let strReverse = ""
    for(let i = str.length -1; i>=0; i--){
        strReverse = strReverse + str[i]
    }
    elem.innerText = strReverse

}
