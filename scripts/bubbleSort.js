let numNums = [];
let count = 0;

for (let n = 0; n < 100; n++) {
  let nums = Math.round(Math.random() * (100 - 1) + 1);
  numNums.push(nums)
}

export const bubbleSort = array => {
  if (Array.isArray(array) && array.length > 0){
    for (let i = array.length - 1; i > 0; i--) {

      for (let j = 0; j < i; j++) {
        let n = j + 1;

        while (array[j] > array[n]) {
          [array[j], array[n]] = [array[n], array[j]]
        }
        count++
        // console.log(count)
      }
    }
    return array
  }
}

bubbleSort(numNums)
// module.exports = bubbleSort;

// export default bubbleSort
