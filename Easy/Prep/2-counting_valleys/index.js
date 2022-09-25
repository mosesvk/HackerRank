
function countingValleys(steps, path) {
  // Write your code here
  
  // Create Variables for the following: 
      //'valleys' for the return integer of how many valleys traversed
      //'traverse' for the integer that will chage depending on the 'path' array is going to return 'D' or 'U'
      //Every time the 'traverse' integer goes from -1 to 0, then add 1 to the 'valleys' variable. 
  
  let valleys = 0;
  let traverse = 0;
  let pathArr = []
  
  
  for (let i = 0; i < path.length; i++) {
      if (path[i] === 'D') {
          traverse -= 1
          pathArr.push(traverse)
      } else {
        traverse += 1
        pathArr.push(traverse)
      }
      

      if (pathArr[i] === 0 && pathArr[i-1] === -1) {
          valleys += 1
      }
  }
  // console.log(pathArr)
  return valleys
}




























  //Solution -----------------------

    // function countingValleys(steps, path) {
    //   // Write your code here
      
    //   // Create Variables for the following: 
    //       //'valleys' for the return integer of how many valleys traversed
    //       //'traverse' for the integer that will chage depending on the 'path' array is going to return 'D' or 'U'
    //       //Every time the 'traverse' integer goes from -1 to 0, then add 1 to the 'valleys' variable. 
      
    //   let valleys = 0;
    //   let traverse = 0;
    //   let pathArr = []
      
    //   for (let i = 0; i < path.length; i++) {

    //       if (path[i] === 'D') {
    //           traverse -= 1
    //           pathArr.push(traverse)
    //       } else {
    //           traverse += 1
    //           pathArr.push(traverse)
    //       }
          
    //       if (pathArr[i] === 0 && pathArr[i - 1] === -1) {
    //           valleys += 1
    //       }
    //   }
    //   console.log(pathArr)
    //   return valleys
    // }
