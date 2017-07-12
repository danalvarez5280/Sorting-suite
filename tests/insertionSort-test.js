import { expect } from 'chai';
import { insertSort } from '../scripts/insertionSort';
import { getRandomNums } from '../scripts/genRandomNums';

describe('Insert Sort', () => {

  it('should be a funciton', () => {
    expect(insertSort).to.be.a.function;
  })

  it('should sort an numbers in an array from samllest to largest', () => {
    let numbers = [5, 9, 4, 8, 3, 7, 2, 6, 1];
    let sorted1 = insertSort(numbers);

    expect(sorted1).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should be able to sort other arrays, smallest to largest', () => {
    let numbers2 = [10, 200, 30, 400, 50, 600, 70, 800, 90, 1];
    let sorted2 = insertSort(numbers2)
    expect(sorted2).to.deep.equal([1, 10, 30, 50, 70, 90, 200, 400, 600, 800]);
  })

  it('should even sort negative numbers', () => {
    let negNums = [-9, -81, -63, -72, -100, -54, -19]
    let sorted3 = insertSort(negNums)
    expect(sorted3).to.deep.equal([-100, -81, -72, -63, -54, -19, -9])
  })

  it('should sort letters!', () => {
    let letters = ['q', 'w', 'r', 't', 'y', 'u', 'o', 'p', 's', 'z', 'x', 'v', 'n'];
    let alphabetOrder = insertSort(letters)

    expect(alphabetOrder).to.deep.equal(['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
  })

  it('should sort any random amount of numbers', () => {
    let randomArray = getRandomNums(12000);
    let sortedRandom = [...randomArray].sort((a, b) => a - b);
    let bubbleSortRandom = insertSort(randomArray)

    expect(bubbleSortRandom).to.deep.equal(sortedRandom)
  })
})
