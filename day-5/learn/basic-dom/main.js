// // console.log(document)
// document.getElementById("playing-field").style.backgroundColor = "blue"
// const playingField = document.getElementById("playing-field")
// console.log(playingField)


// //SPOT CHECK 1
// // link: https://kernel.elevation.ac/cohorts/53/lessons/55/learn/activity/4
// const down = document.getElementById("down")
// console.log(down)

// //@@@@@//
// // down.innerHTML = "Down"
// console.log(down.innerHTML)
// console.log(playingField.innerHTML)
// console.log(playingField.style.backgroundColor) // Only works if I comment out line 2


// //SPOT CHECK 2
// //link: https://kernel.elevation.ac/cohorts/53/lessons/55/learn/activity/6
// const ball = document.getElementById("block")
// ball.style.backgroundColor = "yellow"

// //// SPOT CHECK 3
// // const addLeft = function(propStyle,num){
// //     if (propStyle.left){
// //         console.log(propStyle.left)
// //         let leftVal = parseInt( propStyle.left)
// //         let newVal = leftVal + num
// //         return propStyle.left = (newVal + 'px')
// //     }else{
// //         return propStyle.left = (num + 'px')
// //     }
   
// // }
// // const moveRight = function(num){
//     // addLeft( ball.style,num)
//     // document.getElementById("block").moveLeft(self,30)
//     // style.left += makePixels(30)
// // }
// // const ball = document.getElementById("block")
// // moveRight(30)
// // moveRight(20)
// // moveRight(100)
// // moveRight(100)


// //@@@@@@@@@@@//

// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// header.setAttribute("class", "my-header")
// document.body.appendChild(header)

// //SPOT CHECK 4
// const subHeader = document.createElement("h2")
// subHeader.innerHTML = "Play nicely"
// subHeader.setAttribute("class","his-header")
// document.body.appendChild(subHeader)






// //Exercises
// //Finishing ball game:

// //previous settings:

//  const ball = document.getElementById("block")






// let bs = ball.style
// let upArrow = document.getElementById('up')
// let downArrow = document.getElementById('down')
// let leftArrow = document.getElementById('left')
// let rightArrow = document.getElementById('right')

// // adding movement fonctions:

// //right movement:
// rightArrow.onclick = function(){
//     if (bs.left){
//         // console.log(bs.left)
//         let leftVal = parseInt( bs.left)
//         let newVal = leftVal + 15
//         bs.left = (newVal + 'px')
//     }else{
//         bs.left = (15 + 'px')
//     }
// }
// // left movement:
// leftArrow.onclick = function(){
//     if (bs.left){
//         // console.log(bs.left)
//         let leftVal = parseInt( bs.left)
//         let newVal = leftVal -15
//         return bs.left = (newVal + 'px')
//     }else{
//         return bs.left = (-15 + 'px')
//     }
// }

// // up movement:
// upArrow.onclick = function(){
//     if (bs.top){
//         // console.log(bs.top)
//         let topVal = parseInt( bs.top)
//         let newVal = topVal - 15
//         return bs.top = (newVal + 'px')
//     }else{
//         return bs.top = (-15 + 'px')
//     }
// }

// // down movement:
// downArrow.onclick = function(){
//     if (bs.top){
//         // console.log( bs.top)
//         let TopVal = parseInt( bs.top)
//         let newVal = TopVal + 15
//         return bs.top = (newVal + 'px')
//     }else{
//         return bs.top = (15 + 'px')
//     }
// }


// // EXTENSION EXERCISE

// document.addEventListener ('keydown',logKey) // adding a keyboard listener

//  function logKey(e){
//      if (e.code== "ArrowUp"){
//         e.preventDefault(); //prevents the screen from scrolling 
//         upArrow.onclick()
//      } else if (e.code== "ArrowDown"){
//         e.preventDefault();
//         downArrow.onclick()
//      } else if (e.code== "ArrowLeft"){
//         e.preventDefault();
//         leftArrow.onclick()
//      } else if (e.code== "ArrowRight"){
//         e.preventDefault();
//         rightArrow.onclick()
//      }
//     }

// // left = 37
// // up = 38
// // right = 39
// // down = 40


