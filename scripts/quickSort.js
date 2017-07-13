export const quickSort = array => {
  if (array.length <= 1) {
    return array;
  }
  let low = [];
  let high = [];
  let pivot = array[array.length - 1];

  for (let j = 0; j < array.length - 1; j++) {
    array[j] <= pivot ? low.push(array[j]) : high.push(array[j])
  }
  return [...quickSort(low), pivot, ...quickSort(high)]
}
