// //EXERCISE - BACK TO RESERVATION
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





//EXERCISE - VISUAL OVERLOAD

// creating a color generator:
const randColor = function(){
    let letters = '0123456789ABCDEF'
    let color = '#'
    let string =''
    for (i=0;i<6;i++){
       string += letters[Math.floor(Math.random()*16)]
    }
    return (color+string)
}


// creating continer variable for easier access:
const container = document.getElementById("container")
container.style.height = '60px'

// creating 6 boxes
for (let i=0;i<6;i++){
    //creating box Element + bs variables for easiear access:
    const boxElem = document.createElement("div")
    const bs = boxElem.style
   // creating a specific id for each box
    let id = 'box' + (i+1)
    boxElem.setAttribute('id',id)
    boxElem.setAttribute('class','box')
    bs.backgroundColor = randColor()
    // onmouseover listener for each box
    boxElem.onmouseover = function(){
        bs.backgroundColor =  'black'   //randColor()
        checkColors2()
    }
    container.appendChild(boxElem)
}


const getObjColor = function(str){
    return document.getElementById(str).style.backgroundColor
}

// EXTENSION EXERCISE

function checkColors2(){
    let identifier = 0 // checks the number of boxes witht the same color
    for (let i=2;i<=6;i++){

        // comparing a box's color to the color of the box before 
        if (getObjColor('box'+i) !== getObjColor('box'+(i-1))){
            identifier = 0;
        }else{
            identifier += 1
        }

        //handling the output
        if (identifier >=5){
            const congrats = document.createElement('h3')
            congrats.innerHTML = "Nice job!"
            container.appendChild(congrats)
            return
        }
    }
}




// //EXERCISE - FORM
// //accessing the form's div:
// const form = document.getElementById("form")

// //accessing the errors' div
// const errors = document.getElementById("errors")

// /*creating all of the input fields,headlines and returning values(
//     name - min 2 characters
//     desired salary - numbers only (greater than 10,000 but less than 16,000)
//     birthday - date type (can't be null)
//     phone - numbers only (10 digits long)
//     ): 

//     general form:
//     -creating and managing headline and input field
//     -creating a 'get' function:
//         -creating a new error element ('h4')
//         -managing errors
//         -managing return value

//     < end of input managment in line 215 >
//     < onclick function in line 222 >
//     */
    
//     //name:
//     const nameHead = document.createElement ("h3")
//     nameHead.innerHTML = "Name"
//     nameHead.style.margin = '5px'
//     const nameInput = document.createElement ("input")
//                 form.appendChild(nameHead)
//                 form.appendChild(nameInput)
//     const getName = function(){
//         let nameErr = document.createElement("h4")
//         nameErr.style.color = 'red'

//         //managing errors:
//         if (!nameInput.value){
//             nameErr.innerHTML = "Please enter a name"
//         } else if(nameInput.value.length  <= 2){
//             nameErr.innerHTML = "Name is too short"
//         }

//         // managing return value:
//         if (nameErr.innerHTML){
//             errors.appendChild(nameErr)
//             return
//         }else {
//             return nameInput.value
//         }
//     }



//     //salary:
//     const salaryHead = document.createElement("h3")
//     salaryHead.innerHTML = "Desired Salay"
//     salaryHead.style.margin = '5px'
//     const salaryInput = document.createElement("input")
//     salaryInput.type = 'number'
//             form.appendChild(salaryHead)
//             form.appendChild(salaryInput)
//     const getSalary  = function(){
//         const salaryErr = document.createElement("h4")
//         salaryErr.style.color = 'red' 

//         //managing errors:
//         if (salaryInput.value <10000 || salaryInput <16000){
//             salaryErr.innerHTML = "Salary should be between 10,000 and 16,000"
//         }

//         //managing return value
//         if(salaryErr.innerHTML){
//             errors.appendChild(salaryErr)
//             return
//         }else{
//             return salaryInput.value
//         }
//     }

//     //birthday:
//     const bDayHead = document.createElement("h3")
//     bDayHead.innerHTML = "Birthday Date"
//     bDayHead.style.margin = '5px'
//     const birthdayInput = document.createElement("input")
//     birthdayInput.type = "date"
//             form.appendChild(bDayHead)
//             form.appendChild(birthdayInput)
//     const getBirthday = function(){
//         const birthdayErr = document.createElement("h4")
//         birthdayErr.style.color = 'red'

//         //managing errors:
//         if(!birthdayInput.value){
//             birthdayErr.innerHTML = "Birthday can't be empty"
//         }

//         //managing return value:
//         if(birthdayErr.innerHTML){
//             errors.appendChild(birthdayErr)
//             return
//         }else{
//             return birthdayInput.value
//         }
//     }

//     //phone:
//     const phoneHead = document.createElement("h3")
//     phoneHead.innerHTML = "Phone Number"
//     phoneHead.style.margin = '5px'
//     const phoneInput = document.createElement("input")
//     phoneInput.type = 'number'
//     phoneInput.length = 10;
//                 form.appendChild(phoneHead)
//                 form.appendChild(phoneInput)
//     const getPhone = function(){
//         const phoneErr = document.createElement("h4")
//         phoneErr.style.color = 'red'

//         //managing errors:
//         if (phoneInput.value.length <10){
//             phoneErr.innerHTML = "Phone number is too short"
//         }else if (phoneInput.value.length > 10){
//             phoneErr.innerHTML = "Phone number is too long"
//         }

//         //managing return value:
//         if(phoneErr.innerHTML){
//             errors.appendChild(phoneErr)
//             return
//         }else{
//             return phoneInput.value
//         }
//     }

//     //creating button element
//     const submit = document.createElement("button")
//     submit.innerHTML = "Submit"
//     form.appendChild(submit)

//     // onclick listener for 'submit' button
//     submit.onclick = function (){
//         // cleaning errors' div so they won't pile up:
//         errors.innerHTML = ''

//         // getting the data
//         const name = getName()
//         const salary = getSalary()
//         const birthday = getBirthday()
//         const phone = getPhone()
        
//         //creating summary to show:
//         let sum = document.createElement('h4')
//         sum.style.margin = '5px'

//         //managing summary/errors display
//         if(name&&salary&&birthday&&phone){
//             form.innerHTML = '' //EXTENTION EXERCISE
//             sum.innerHTML = (`Welcome,${name}, <br> Here is your information: <br><br> desired salary: ${salary}, <br> birthday: ${birthday}, <br> phone number: ${phone} `)
//             form.appendChild(sum)
//         }

//     }