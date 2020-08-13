// //BACK TO RESERVATION
// //link: https://kernel.elevation.ac/cohorts/53/lessons/55/apply/activity/15

// //DOM:
// //creatin a body variable for easier access
// const body = document.getElementById("body")

// // creating input element:
// const input = document.createElement("input")
// input.placeholder = 'Your name?'
// body.appendChild(input)

// //creating button element
// const submit = document.createElement("button")
// submit.innerHTML = "get reservation!"
// body.appendChild(submit)

// //onclick button
// submit.onclick = function(){
//     name = input.value
//     let upperName = name.charAt(0).toUpperCase() + name.slice(1);
//     //creating h4 element for the function's respond:
//     const output = document.createElement("h4") 

//     // function logic:
//     if(reservations [upperName] && !reservations[upperName].claimed){
//         output.innerHTML = `Welcome, ${upperName}`
//     }else if (reservations[upperName]  && reservations[upperName].claimed){
//         output.innerHTML = `Sorry ${upperName}, someone already claimed this reservation`
//     }else{
//         reservations[upperName] = {claimed: true}
//         output.innerHTML= `Welcome to our resturant, ${upperName}. We have an available table for you`
//     }
//     body.appendChild(output)// showing the proper respond
// }

// //reservation data:
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }





// //EXERCISE - VISUAL OVERLOAD

// // creating a color generator:
// const randColor = function(){
//     let letters = '0123456789ABCDEF'
//     let color = '#'
//     let string =''
//     for (i=0;i<6;i++){
//        string += letters[Math.floor(Math.random()*16)]
//     }
//     return (color+string)
// }


// // creating continer variable for easier access:
// const container = document.getElementById("container")
// container.style.height = '60px'

// // creating 6 boxes
// for (let i=0;i<6;i++){
//     //creating box Element + bs variables for easiear access:
//     const boxElem = document.createElement("div")
//     const bs = boxElem.style
//     boxElem.setAttribute('class','box')
//     bs.backgroundColor = randColor()
//     boxElem.onmouseover = function(){
//         bs.backgroundColor = randColor()
//     }
//     container.appendChild(boxElem)
// }




//EXERCISE - FORM
//accessing the main div:
const div = document.getElementById("form")

/*creating all of the input fields,headlines and returning values(
    name - characters only (min 2chars)
    desired salary - numbers only (greater than 10,000 but less than 16,000)
    birthday - date type (can't be null)
    phone - numbers only (10 digits)
    ): */
    
    //name:
    const nameHead = document.createElement ("h2")
    nameHead.innerHTML = "Name"
    const nameInput = document.createElement ("input")
                div.appendChild(nameHead)
                div.appendChild(nameInput)
    const getName = function(){
        let nameErr = document.createElement("h4")
        nameErr.style.color = 'red'
        // console.log()
        if (!nameInput.value){
            nameErr.innerHTML = "Please enter a name"
        } else if(nameInput.value.length  <= 2){
            nameErr.innerHTML = "Name is too short"
        }
        if (nameErr.innerHTML){
            console.log("nameError = true")
            div.appendChild(nameErr)
            return
        }else {
            return nameInput.value
        }
    }



    //salay:
    const salartHead = document.createElement("h2")
    salartHead.innerHTML = "Desired Salay"
    const salaryInput = document.createElement("input")
            div.appendChild(salartHead)
            div.appendChild(salaryInput)
    const getSalary  = function(){
        const salaryErr = document.createElement("h4")
        salaryErr.style.color = 'red' 
        if (salaryInput.value <10000 || salaryInput <16000){
            salaryErr.innerHTML = "Salary should be between 10,000 and 16,000"
        }
        if(salaryErr.innerHTML){
            div.appendChild(salaryErr)
        }else{
            return salaryInput.value
        }
    }

    //birthday:
    //  ***DETERMINE INPUT: DATE***
    const bDayHead = document.createElement("h2")
    bDayHead.innerHTML = "Birthday Date"
    const birthdayInput = document.createElement("input")
            div.appendChild(bDayHead)
            div.appendChild(birthdayInput)
    const getBirthday = function(){
        const birthdayErr = document.createElement("h4")
        birthdayErr.style.color = 'red'
        if(!birthdayInput.value){
            birthdayErr.innerHTML = "Birthday can't be empty"
        }
        if(birthdayErr.innerHTML){
            div.appendChild(birthdayErr)
        }else{
            return birthdayInput.value
        }
    }

    //phone:
    const phoneInput = document.createElement("input")

    //creating button element
    const submit = document.createElement("button")
    submit.innerHTML = "Submit"
    div.appendChild(submit)

    submit.onclick = function (){
        const name = getName()
        // const name = nameInput.value
        const salary = getSalary()
        const birthday = getBirthday()
        const phone = phoneInput.value
        console.log("name:",name)
        console.log("salary:", salary)
        console.log("birthday", birthday)
    }