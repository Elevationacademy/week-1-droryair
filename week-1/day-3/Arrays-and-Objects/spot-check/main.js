// SPOT CHECK 1
// Create an array called myStuff containing 3 strings inside of it. Then, console log the second item in the array.
let myStuff = ["item1","item2","item3"]
console.log(myStuff[1])

//.....................
// const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
// console.log(plants.length) // prints 5

// let lastIndex = plants.length - 1 // equal to (5 - 1) = 4
// console.log(plants[lastIndex]) // prints "Yew"
// console.log(plants[4]) // the same
// console.log(`the first plant is ${plants[0]}, and the last one is ${plants[plants.length-1]}`);


//SPOT CHECK 2
// Using your myStuff array, add the last item to the beginning, and the first item to the end.
// If your array was ["a", "b", "c"], then now it should be ["c", "a", "b", "c", "a"]
myStuff.unshift( myStuff[myStuff.length-1])
myStuff.push( myStuff[1])// using index 1 bc I already added an item at the beggining of the array.
console.log(myStuff)


//SPOT CHECK 3
//Duplicate your myStuff array using ...
//For instance, if it was ["a", "b", "c"], it should now be ["a", "b", "c", "a", "b", "c"]
let newStuff = [...myStuff]
console.log(newStuff , myStuff)

//SPOT CHECK 4
//remove everything except for the last item from this array: ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
//The array should look like this in the end: ["life"]
let nature = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
nature.splice (0,8)
console.log(nature)

nature.splice(1,0, "hi")
console.log(nature)
// to both add AND delete items:
nature.splice (1,1, "hellooo") // deleting 'hi' and adding 'hellooo'
console.log(nature)

