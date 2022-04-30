// let firstval = "USD";
// let secondval = "RUB";
// let link = `https://api.exchangerate.host/latest?base=${firstval}&symbols=${secondval}`;

// const btns_left = document.querySelectorAll('.left');
// const btns_right = document.querySelectorAll('.right')

// left.forEach(btn => {
//     btn.addEventListener('click', () =>{
//         left.forEach(item => {
//             item.classList.remove('active')
//         })
//         btn.classList.add('active')
//     })
// })


let leftSide = document.querySelector(".left")
let leftRight = document.querySelector(".right")
let firstval = AZN_lft.innerText;
let secondval = USD_right.innerText;
let left_AZN = document.querySelector('#AZN_lft')
left_AZN.classList.add('active_left')
let right_USD = document.querySelector('#USD_right')
right_USD.classList.add('active_right')
let btns_left = document.querySelectorAll(".left_button")
let btns_right = document.querySelectorAll(".right_button")
let leftinput = document.querySelector('.input_left')
let rightinput = document.querySelector('.input_right')


let link = `https://api.exchangerate.host/latest?base=${firstval}&symbols=${secondval}`;
let link2 = `https://api.exchangerate.host/latest?base=${secondval}&symbols=${firstval}`;


btns_left.forEach(btn => {
   btn.addEventListener("click",(e) => {
       btns_left.forEach(item=>{
         item.classList.remove('active_left')
     })
       btn.classList.add('active_left')
       firstval=e.target.innerText
       link = `https://api.exchangerate.host/latest?base=${firstval}&symbols=${secondval}`
       link2 = `https://api.exchangerate.host/latest?base=${secondval}&symbols=${firstval}`;
   })
})

btns_right.forEach(btn => {
   btn.addEventListener("click",(e) => {
       btns_right.forEach(item=>{
         item.classList.remove('active_right')
     })
       btn.classList.add('active_right')
       secondval=e.target.innerText
       link = `https://api.exchangerate.host/latest?base=${firstval}&symbols=${secondval}`
      link2 = `https://api.exchangerate.host/latest?base=${secondval}&symbols=${firstval}`; 
   })
})


function left(){
   leftinput.addEventListener("keyup",()=>{
   fetch(link)
   .then(response=>response.json())
   .then(data => {
           rightinput.value = data.rates[secondval]*leftinput.value       
   })
   })
   leftinput.addEventListener("click",()=>{
       fetch(link)
       .then(response=>response.json())
       .then(data => {
               rightinput.value = data.rates[secondval]*leftinput.value
       })
       })
}
   

function right(){ 
   rightinput.addEventListener("keyup",()=>{
   fetch(link2)
   .then(response=>response.json())
   .then(data => {
           leftinput.value = data.rates[firstval]*rightinput.value
   })
   })
   rightinput.addEventListener("click",()=>{
       fetch(link2)
       .then(response=>response.json())
       .then(data => {
               leftinput.value = data.rates[firstval]*rightinput.value
       })
       })
}
       

leftinput.addEventListener('click',left)
rightinput.addEventListener('click',right)
leftinput.addEventListener('keyup',left)
rightinput.addEventListener('keyup',right)
btns_left.addEventListener('click',left)
btns_right.addEventListener('click',right)


