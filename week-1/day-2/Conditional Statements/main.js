
// VARIABLES & OPERATORS
// TASK 3
// let password = '1234'
// let confirmPassword = '3456'

// if (password === confirmPassword){
//     console.log("password is saved");
// } else {
//     console.log("your inputs are not identical")
// }


//TASK 4
// let r1 = 423 * 12;
// let r2 = 802 / 2;
// let r3 = (5+6) * 3;
// console.log(r1 ,r2, r3);


// TASK 5 
// (5 > 2) && false                 -> falsy
// !("knife" === "sword")           -> truthy
// (1 < 2) || (-1 > -1) || !false   -> truthy
// ""                               -> falsy
// (31 % 5) == "1"                  -> falsy
// !!true                           -> truthy
// "5th Avenue" != "5th Avenue"     -> falsy
// 52 !== "52"                      -> falsy
// (undefined || null)              -> falsy

// TASK 6
// let a = 3
// a = 4
// let c = 0
// let b = a
// b = 2
// a = b
// b = c
// c = a
// a = b
// a =0 b =0  c = 2 




//CONDITIONAL STATEMENTS
//TASK 1
// let numChildren = 5
// let isCareful   = true;
// if(!isCareful){
//     numChildren --
// }
// console.log(numChildren)

//TASK 2
// let silverwareCount = 6
// if(silverwareCount % 2 !==0){
//     console.log('theres something missing')
// }

//TASK 3 
// let performance = "stellar"
// let salary = 10000
// const goodBonus = 1000
// const stellarBonus = 3000

// if(performance== "stellar") {
//     salary += stellarBonus
// } else if (performance == "good"){
//     salary += goodBonus;
// }
// console.log(salary)

//TASK 4
// const isVIP = false
// let cash = 500
// if(isVIP=== true || cash > 300){
//     console.log('Welcome to the club :) ')
// } else {
//     console.log(' get outta here, scum  >:( ')
// }

//TASK 5
// const a = 3
// let b = 2
// let c = 0 || 12
// let d

// b = c
// b++
// if(d){
//   b = a
// }
// d = a + (b * c)
// d++
// b += 2
// a= 3  b=15  c=12  d=  160 

// TASK 6
// let profession = "business"
// let gender = prompt ("please enter your gender")
// if(!gender){
//     gender = "person"
// }
// console.log("your profession is: " ,profession + gender);

//TASK 7
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if(boughtTesla == true && isUSCitizen== true){
    if((currentYear - yearOfTeslaPurchase) >= 4) {
        console.log("would you like an upgrade?")
    }else {
        console.log("are you satisfied with your car?")
    }
}else if (boughtTesla == true){
    console.log("would you like to move to the USA?")
}else{
    console.log("Would you like to buy a Telsa?")
}
