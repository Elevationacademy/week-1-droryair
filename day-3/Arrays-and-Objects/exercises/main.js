// // ARRAYS-1
// // link: https://kernel.elevation.ac/cohorts/53/lessons/61/apply/activity/6
// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
// let newGenes = [...genes]
// let rlf = genes [2]
// let cryz = genes [genes.length-1]
// newGenes.splice (2,1, cryz)
// newGenes.splice(newGenes.length-1,1,rlf)
// // newGenes = ["ACADM", "GLMN", "CRYZ", "AZIN2", "RLF"]
// let azin2 = genes [3]
// newGenes.splice(3,1)
// newGenes.push (azin2,azin2)
// //  newGenes = ["ACADM", "GLMN", "CRYZ", "RLF", "AZIN2", "AZIN2"]
// newGenes.splice(0,0,"FXT")
// // newGenes = ["FXT", "ACADM", "GLMN", "CRYZ", "RLF", "AZIN2", "AZIN2"]


// //OBJECTS 1-4 )(MUST)
// // link :https://kernel.elevation.ac/cohorts/53/lessons/62/apply/activity/8
// //EXERCISE 1
// let p1 = {
//     name: 'Bob',
//     age: 22,
//     city: 'New York'
// }
// let p2 = {
//     name: 'Jason',
//     age: 24,
//     city: 'Verginia'
// }
// if (p1.age = p2.age){
//     if (p1.city = p2.city){
//         console.log(`${p1.name} will want to date ${p2.name}`)
//     }else {
//         console.log(`${p1.name} wanted to marry ${p2.name}, but couldn't`)
//     }
// }


// //EXERCISE 2 
// let myList = [
//     {
//         prop: 'wardrobe',
//         quantity: 11, 
//         isVital:true 
//     },{
//         prop: 'excessories',
//         quantity: 3,
//         isVital: false
//     }
// ]
// myList[0].isVital = false
// myList.splice(1,1)
// console.log("myList:",myList)


// //EXERCISE 3
// let anotherArr = [
//     {
//         key1: 'value0',
//         key2: 2,
//         key3: true
//     },{
//         key1: 'Value1',
//         key2: 3,
//         key3: false
//     }
// ]
// console.log("anotherArr:", anotherArr)
// let combinedArr = [...myList]
// combinedArr.push(anotherArr)
// console.log("combinedArr:" ,combinedArr)


// //EXERCISE 4
// let library = {books:[
// {
//     title: 'Percy Jackson' ,
//     author: 'Rick Riordan'
// },
// {
//     title: 'The Hunger games',
//     author: 'Suzanne Collins'
// },
// {
//     title:'Harry Potter' ,
//     author: 'J.K. Rowling'
// }
//     ]
//         }

// library.books.push(myList)
// console.log(library)



// //OBJECTS 5,Extensions (CHALLENGING)
// // link :https://kernel.elevation.ac/cohorts/53/lessons/62/apply/activity/8
// //EXERCISE 5
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }

// const name = prompt('Please enter the name for your reservation').toLowerCase()
// let upperName = name.charAt(0).toUpperCase() + name.slice(1);
// console.log(upperName)

// if(reservations [upperName] && !reservations[upperName].claimed){
//     console.log(`Welcome, ${upperName}`)
// }else if (reservations[upperName]  && reservations[upperName].claimed){
//     console.log(`Sorry ${upperName}, someone already claimed this reservation`)
// }else{
//     reservations[upperName] = {claimed: true}
//     console.log(reservations)
// }

// let string = 'string'
// string = string.charAt(0).toUpperCase() + string.slice(1)
// console.log(string)

// //Extensions EXERCISE
// const date = 3

// const kitchen = {
//     owner: "Geraldine",
//     hasOven: false, // choose one
//     fridge: {
//         price: 500,
//         works: false, // choose one
//         items: [
//             { name: "cheese", expiryDate: 7 },
//             { name: "raddish", expiryDate: 2 },
//             { name: "bread", expiryDate: 1 }
//         ]
//     }
// }

// let fridgeItems = kitchen.fridge.items



// if (kitchen.hasOven== true && kitchen.fridge.works== true){
//     console.log( `${kitchen.owner}'s ${fridgeItems[1].name} expired ${fridgeItems[1].expiryDate} days ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${fridgeItems[1].name} in.`)
// }else if (kitchen.hasOven== false && kitchen.fridge.works== true){
//     console.log (`${kitchen.owner}'s ${fridgeItems[1].name} expired ${fridgeItems[1].expiryDate} days ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${fridgeItems[1].name} in.`)
// }else if (kitchen.hasOven== true && kitchen.fridge.works== false){
//     console.log(`${kitchen.owner}'s ${fridgeItems[1].name} expired ${fridgeItems[1].expiryDate} days ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${fridgeItems[1].name} in. And she'll have to pay ${kitchen.fridge.price} to fix the fridge.`)
// }else {
//     console.log(` ${kitchen.owner}'s ${fridgeItems[1].name} expired ${fridgeItems[1].expiryDate} days ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay ${kitchen.fridge.price} to fix the fridge.`)
// }
