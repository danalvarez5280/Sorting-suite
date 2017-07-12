numNums = [5, 9, 1, 8, 3, 7, 2, 6, 4];

const quickSort = array => {
    if (array.length <= 1) {
    return array;
    }
    let low = [];
    let high = [];
    let pivot = array[array.length -1];

    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] <= pivot) {
      low.push(array[j])
      } else {
        high.push(array[j])
      }
    }

   return [...quickSort(low), pivot, ...quickSort(high)]
}

quickSort(numNums)
