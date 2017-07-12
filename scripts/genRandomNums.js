export const getRandomNums = (range) => {
  let numNums = [];
  for (let n = 0; n < range; n++) {
    let nums = Math.round(Math.random() * (range - 1) + 1);
    numNums.push(nums);
  }
  return numNums
}

// export default getRandomNums
