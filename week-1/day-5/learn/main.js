const boxy = document.getElementById("boxy")

const enterColor = function () {
    boxy.style.backgroundColor = "#c0392b"
    boxy.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    boxy.style.backgroundColor = "#1abc9c"
    boxy.innerHTML = "Hover over me!"
}

//SPOT CHECK 5 
//link: https://kernel.elevation.ac/cohorts/53/lessons/55/learn/activity/12
const clickColor = function (){
    boxy.style.background = "#8e44ad"
    // box.innerHTML = ""
}


//SPOT CHECK 6
//link: https://kernel.elevation.ac/cohorts/53/lessons/55/learn/activity/13
const item = document.getElementById("item")
const list = document.getElementById("items-list")
const itemClick = function (){
    const item = document.createElement("li")
    // item.onclick = itemClick()
    item.innerHTML = "A new item!"
    item.id = "item"
    list.appendChild(item)
}

//@@@@@@@@@@@@@@@@//

function getRandColor (){
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (let i = 0; i<6; i++){
        // Math.floor() - returns the number before the .
        //Math.random() - returns a number between 0-1
        // 16*0.9999 = 15.9
        // so the biggest number I'll get will be 15, and not 16 v
        color += letters[Math.floor(Math.random() *16)] //why 16? explained above ^
    }
    console.log("color:", color)
    return color
}


const box = document.getElementById("box")
box.onclick = function () {
    box.innerHTML = "clicked"
}
box.onmouseenter = function (){
    box.style.backgroundColor = getRandColor()}

box.onmouseleave = function(){
    box.style.color = 'black'
}




const box2 = document.createElement("div") // dynamically creating an element

box2.setAttribute("id", "box2")
box2.innerHTML = 'am I alive?'
// box2.style.color = 'white'
// box2.style.backgroundColor = 'black'
box2.onclick = function(){       // adding an event to the new element
    box2.innerHTML = "I'm alive!"
}

document.getElementById("box2div").appendChild(box2) // now the box will be on the page, and will react to a click!