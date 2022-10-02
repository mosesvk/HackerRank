let testArr = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
]


const test = (arr) => {

  // enter code below

  
}





// const hourglassSum = (arr) => {

//   // these are the starting points (most top left) for each hourglass
//   // either points cannot be more than 3 since the array is [5 x 5]
//   let x = 0;
//   let y = 0;
//   let sumsArr = []

//   while (x < 4) {
//     while (y < 4) {

//       let sum = 0 // this will add each hourglass sum to push into the sumsArr array

//       // Since x & y are the starting points. We need 2 'for loops' to loop a [3 x 3]
//           // index 'i' will equal the 'x' starting point. 'j' will be with the 'y' starting point
//           // 'i' and 'j' will then loop 3 indexes
//                 // 'i' will be the x-axis, 'j' will move from left to right during the 'for loop'
//       for (let i = x; i < (x + 3); i++) {
//         for (let j = y; j < (y + 3); j++) {
//           sum += arr[i][j]  // we are going to add every number we loop in the [3 x 3] hourglass
//         }
//       }

//       sum = sum - arr[x+1][y] - arr[x+1][y+2]  // make sure to subtract the two items that are not apart of the [3 x 3] hourglass

//       sumsArr.push(sum)

//       y++ 
      
//     }

//     x++

//     y = 0
//   }

//   return Math.max(...sumsArr)
  
// }