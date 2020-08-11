// // EXERCISES 1 - 4 (MUSTS)
// // link: https://kernel.elevation.ac/cohorts/53/lessons/64/apply/activity/6

// //EXERCISE 1
//  let names = ['Anna','Ariel','Aurora']
//  let ages = [21, 16, 16]

// for (let i in names){
//     console.log(`${names[i]} is ${ages[i]} years old`)
// }

// // EXERCISE 2
// let nums = [1,2,3,4,5,6]
// let sum = 0
// for (num of nums){
//     sum += num
// }
// console.log(sum)

// //EXERCISE 3
// avg = sum / nums.length
// console.log(avg)

// //EXERCISE 4
// let nums2 = []
// for (let i=1;i<=100;i++){
//     nums2.push(i)
// }
// console.log(nums2)





// // EXERCISES 5-7 (NO-TAG)
// // link: https://kernel.elevation.ac/cohorts/53/lessons/64/apply/activity/6


// //EXERCISE 5
// for (let i in nums2){
//     if (i %2 !==0){
//         console.log(i)
//     }
// }

// //EXERCISE 6
// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// for (i in nums){
//     if (nums[i] === 709){
//         console.log(i)
//     }
// }

// // EXERCISE 7
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []
// for (i in names){
//     people.push(  {name: names[i], age: ages[i]}  )
// }
// console.log(people)




// // EXERCISES 8 - 11 (CHALLENGING)
// // link: https://kernel.elevation.ac/cohorts/53/lessons/64/apply/activity/6

// // EXERCISE 8

// let people = [
// {name: "Ashley", age: 23},
// {name: "Donovan", age: 47},
// {name: "Lucas", age: 18},
// ]

// console.log(people)

// for ( i in people){
//     console.log(`${people[i].name} is ${people[i].age} years old`)
// }

// //EXERCISE 9
// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]

//   for (let i in posts){
//       if (posts[i].id ===2 ){
//           posts.splice(posts[i],1)
//       }
//   }
//   console.log(posts)

// //EXERCISE 10
// const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []
//     },
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [
//                   {id: 1, text: "Idiot has no idea"}, 
//                   {id: 2, text:"Fool!"}, 
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ]



// for (let i in posts){
//     if ( posts[i].id ===2){
//         console.log(i)
//         for (let i2 in posts[i].comments) {
//             if (posts[i].comments[i2].id ===3){
//                 console.log(i2)
//                 posts[i].comments.splice(i2,1)
//             }
//         }
//     }
// }

// console.log(posts)

// //EXERCISE 11
// const dictionary = {
//     "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//     "B": ["Banana", "Bonkers", "Brain", "Bump"],
//     "C": ["Callous", "Chain", "Coil", "Czech"]
//   }

// let keys = Object.keys(dictionary)
// for (let i in keys){
//     console.log (`Words that begins with ${keys[i]}:`)
//     for (let e in dictionary[keys[i]]){
//         console.log(dictionary[keys[i]][e])
//     }
// }