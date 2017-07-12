let numNums = [];
let count = 0;

for (let n = 0; n < 100; n++) {
  let nums = Math.round(Math.random() * (100 - 1) + 1);
  numNums.push(nums);
}

 export const insertSort = array => {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    while ( array[i] < array[j]) {
      [array[i], array[j]] = [array[j], array[i]]
      i -= 1;
      j = i - 1;
    }
    count++
    // console.log(count)
  }
  return array
}

insertSort(numNums)

// module.exports = InsertSort;
