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


//OBJECTS 1-6
// link :https://kernel.elevation.ac/cohorts/53/lessons/62/apply/activity/8
//EXERCISE 1
let p1 = {
    name: 'Bob',
    age: 22,
    city: 'New York'
}
let p2 = {
    name: 'Jason',
    age: 24,
    city: 'Verginia'
}
if (p1.age = p2.age){
    if (p1.city = p2.city){
        console.log(`${p1.name} will want to date ${p2.name}`)
    }else {
        console.log(`${p1.name} wanted to marry ${p2.name}, but couldn't`)
    }
}


//EXERCISE 2 
let myList = [
    {
        prop: 'wardrobe',
        quantity: 11, 
        isVital:true 
    },{
        prop: 'excessories',
        quantity: 3,
        isVital: false
    }
]
myList[0].isVital = false
myList.splice(1,1)
console.log("myList:",myList)


//EXERCISE 3
let anotherArr = [
    {
        key1: 'value0',
        key2: 2,
        key3: true
    },{
        key1: 'Value1',
        key2: 3,
        key3: false
    }
]
console.log("anotherArr:", anotherArr)
let combinedArr = [...myList]
combinedArr.push(anotherArr)
console.log("combinedArr:" ,combinedArr)


//EXERCISE 4
let library = {book:[]}

library.book.push(  
{
    title: 'Percy Jackson' ,
    author: 'Rick Riordan'
},
{
    title: 'The Hunger games',
    author: 'Suzanne Collins'
},
{
    title:'Harry Potter' ,
    author: 'J.K. Rowling'
})
console.log(library)


//Exercise 5