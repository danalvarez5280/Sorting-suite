export const bubbleSort = array => {
  if (Array.isArray(array) && array.length > 0) {
    for (let i = array.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        let n = j + 1;
        
        while (array[j] > array[n]) {
          [array[j], array[n]] = [array[n], array[j]]
        }
      }
    }
    return array
  }
}
