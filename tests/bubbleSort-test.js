// const {expect, assert} = require('chai')
// const {bubbleSort} = require('../scripts/bubbleSort.js')

import { expect } from 'chai';
import { bubbleSort } from '../scripts/bubbleSort';
import { getRandomNums } from '../scripts/genRandomNums';


describe('Bubble Sort', ()  => {

  it('shoul be a function', () => {
    expect(bubbleSort).to.be.a.function
  })

  it('should sort numbers in an array from smallest to largest', () => {
    let numbers = [5, 9, 4, 8, 3, 7, 2, 6, 1];
    let sorted = bubbleSort(numbers);
    expect(sorted).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should be able to sort other arrays, smallest to largest', () => {
    let numbers2 = [100, 20, 300, 40, 500, 60, 700, 80, 900, 10]
    let sorted2 = bubbleSort(numbers2)
    expect(sorted2).to.deep.equal([10, 20, 40, 60, 80, 100, 300, 500, 700, 900])
  })

  it('should even sort negative numbers', () => {
    let negNums = [-1, -26, -15, -48, -37, -600, -59,]
    let sorted3 = bubbleSort(negNums)
    expect(sorted3).to.deep.equal([-600, -59, -48, -37, -26, -15, -1])
  })

  it('should sort letters!', () => {
    let letters = ['e', 'i', 'a', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'c', 'b', 'm'];
    let alphabetOrder = bubbleSort(letters)

    expect(alphabetOrder).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'])
  })

  it('should sort any random amount of numbers', () => {
    let randomArray = getRandomNums(10000);
    let sortedRandom = [...randomArray].sort((a, b) => a - b);
    let bubbleSortRandom = bubbleSort(randomArray)

    expect(bubbleSortRandom).to.deep.equal(sortedRandom)
  })


});
