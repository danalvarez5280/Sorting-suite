let numNums = [];
let count = 0;

for (let n = 0; n < 25; n++){
  let nums = Math.round(Math.random() * (100) + 1);
  numNums.push(nums);
}

export const mergeSort = array => {
  count++
  if (Array.isArray(array) && array.length > 0) {
    if (array.length === 1) {
    return array
  }
    let half = Math.floor(array.length / 2);
    let leftArray = array.slice(0, half);
    let rightArray = array.slice(half);

    return mergeArrays(mergeSort(leftArray), mergeSort(rightArray))
  }
};


export const mergeArrays = (leftArray, rightArray) => {
  let sortedArray = []

  while (leftArray.length > 0 && rightArray.length > 0) {
    leftArray[0] <= rightArray[0] ? sortedArray.push(leftArray.shift()) : sortedArray.push(rightArray.shift());
  }
  sortedArray.push(...leftArray, ...rightArray)

   return sortedArray
};

mergeSort(numNums)
