// mergeSoredArrays2
//[0,3,4,31] [4,6,30] []
/*
1. pointer1 = 0 pointer 2 = 4
2. push pointer1 into empty array
3. move pointer1 1 position

*/
function mergeSortedArray(arr1,arr2){

  if (arr1.length <1)
    return arr2
  else if (arr2.length <1)
    return arr1


    
  
  const newArray = []
  let pointer1 = 0 
  let pointer2 = 0

  while (pointer1<arr1.length && pointer2<arr2.length){
    if(arr1[pointer1]<=arr2[pointer2]){
      newArray.push(arr1[pointer1])
      pointer1 ++
    }else{
      newArray.push(arr2[pointer2])
      pointer2 ++
    }
  }

  if (pointer1<arr1.length){
    return [...newArray,...arr1.slice(pointer1)]
  } else{
    return [...newArray,...arr2.slice(pointer2)]
  }

return newArray
  

  
  
  
}

console.log(mergeSortedArray([4,4,5,6,7,77,1000,102302],[2,4,6,7,8,]))