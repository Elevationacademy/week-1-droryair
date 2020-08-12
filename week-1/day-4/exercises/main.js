// //EXERCISES 1 - 5 (MUST)
// //link: https://kernel.elevation.ac/cohorts/53/lessons/57/apply/activity/11

// //EXERCISE 1
// const calcAge  = function (currenYear, yearOfBirth){
//     let age =  (currenYear - yearOfBirth)
//     console.log(`age is ${age}`)
// }
// const age = calcAge(2020, 1998)


// //EXERCISE 2
// const calcAge  = function (currenYear, yearOfBirth){
//     let age =  (currenYear - yearOfBirth)
//     console.log(`Your age is either ${age} or ${age-1}, depanding on the month`)
// }
// const age = calcAge(2020, 1998)


// //EXERCISE 3
// const isEven = function (num){
//      return ( num % 2 == 0 )
// }
// console.log(isEven(213)) // logs false
// console.log(isEven(2345678)) // logs true


// //EXERCISE 4
// const oddNums = function (arr){
//     for (let num of arr){
//         if(num % 2 !== 0){
//             console.log(num)
//         }
//     }
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// oddNums(arr) //logs 1,3,5,7,9


// //EXERCISE 5
// const isInArr  = function (arr, num){
//     let i = 0
//     while (i < arr.length) {
//         if (arr[i] == num){
//             return true
//         } else {
//             i++
//         }
//     }
//     return false
// }
// console.log(isInArr([1,2,3],1)) //logs true
// console.log(isInArr([1,2,3],4))// logs false



//EXERCISES 6-8 (CHALLENGING)
//link: https://kernel.elevation.ac/cohorts/53/lessons/57/apply/activity/11

// //EXERCISE 6

// let calculator = {
//     add: function(num1,num2){
//         return (num1 + num2)
//     },
//     subtract: function (num1,num2){
//         return (num1 - num2)
//     }
// }
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //logs 42

// //EXERCISE 7

// const increaseByNameLength = function (money, name){
//  return (money * name.length)
// }


// const makeRegal = function (name){
//     return (`His Royal Highness, ${name}`)
// }


// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }
// turnToKing("martin luther", 100) // logs "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


//EXERCISE 8 -- EXTENSION
