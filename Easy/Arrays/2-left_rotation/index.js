



// Left-Rotation
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen


// function rotLeft(a, arr) {
//   // Write your code here
  
//   let i = 0

//   while (i < (a + 1)){
//     arr.push(arr[0])
//     arr.shift()

//     console.log(arr)

//     i++
//   }

//   return arr

// }

// console.log(rotLeft(54, [1, 2, 3, 4, 5]))


function rotLeft(a, d) {
  // Write your code here
  
    for(let i=0; i<d; i++){
        let j=0
        a.push(a[j]);
        a.shift();
    }
  
    return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 54))