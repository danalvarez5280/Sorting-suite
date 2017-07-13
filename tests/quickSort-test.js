import { expect } from 'chai';
import { quickSort } from '../scripts/quickSort';
import { getRandomNums } from '../scripts/genRandomNums';

describe('Quick Sort', () => {

  it('should be a function', () => {
    expect(quickSort).to.be.a.function;
  });

  it('should be able to sort an array from smalled to largest', () => {
    let numList = [5, 9, 4, 8, 3, 7, 2, 6, 1];
    let quickList = quickSort(numList);

    expect(quickList).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should be able to sort another array', () => {
    let numList2 = [12, 62, 10, 58, 39, 38, 106, 14, 27, 62];
    let quickList2 = quickSort(numList2);

    expect(quickList2).to.deep.equal([10, 12, 14, 27, 38, 39, 58, 62, 62, 106]);
  });

  it('should even sort negative numbers', () => {
    let numList3 = [-4, -128, -5409, -3021, -9999, -129, -6721];
    let quickList3 = quickSort(numList3);

    expect(quickList3).to.deep.equal(
          [-9999, -6721, -5409, -3021, -129, -128, -4]);
  });

  it('should sort letters!', () => {
    let letterList = [
      'e', 'i', 'a', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'c', 'b', 'm'];
    let quickLetters = quickSort(letterList);

    expect(quickLetters).to.deep.equal(
          ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']);
  });

  it('should sort any random amount of numbers', () => {
    let randomList = getRandomNums(200000);
    let sortedRandom = [...randomList].sort((a, b) => a - b);
    let quickRandomSort = quickSort(randomList);

    expect(quickRandomSort).to.deep.equal(sortedRandom);
  });
});
