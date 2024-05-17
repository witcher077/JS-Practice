
// document.querySelector("#btn").addEventListener("click",function (){
//     const link = document.querySelector(".link").href;
//     console.log(link);
// });
// document.querySelector("#btn").addEventListener("click",function (){
//     document.querySelector(".link").href="https://www.w3schools.com/jsref/met_element_addeventlistener.asp";
//     const link = document.querySelector(".link").href;
//     console.log(link);
// });

// ------------------------------------------------------------
// Event Propagation - Bubbling/Capturing, and Event Delegation
// - Bubbling

// document.querySelector("#container").addEventListener('click',()=>{
//     alert("This is Div")
// })
// document.querySelector("#span").addEventListener('click',()=>{
//     alert("This is Span")
// },true)
// document.querySelector("#btn").addEventListener('click',()=>{
//     alert("This is Btn")
// })
// ---------------------------------------------------------
//Event Delegation

// document.querySelector(".products").addEventListener("click",(e)=>{
//     console.log(e.target.closest("SPAN"));  //Need know More 
// window.location.href +="/"+e.target.className;
// })

//dialog box open close

// document.querySelector("#btn").addEventListener('click',(e)=>{
//     e.stopPropagation()
//     document.querySelector("#box").style.display="block";
// })
// document.querySelector(".container").addEventListener('click',(e)=>{
// e.stopPropagation();

// if(e.target.className=="container")
//     document.querySelector("#box").style.display="none";
// })