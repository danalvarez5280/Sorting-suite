import { expect } from "chai";
import { mergeSort } from '../scripts/mergeSort';
import { getRandomNums } from "../scripts/genRandomNums";

describe('Merge Sort', () => {

  it('should be an easy function but is unnecessarily difficult', () => {
    expect(mergeSort).to.be.a.function;
  })

  it('should be able to sort an array from smalled to largest', () => {
    let numberArray1 = [5, 9, 4, 8, 3, 7, 2, 6, 1,];
    let mergeSort1 = mergeSort(numberArray1);
    expect(mergeSort1).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })

  it('should be able to sort another array', () => {
    let numberArray2 = [12, 62, 10, 58, 39, 38, 106, 14, 27, 62];
    let mergeSort2 = mergeSort(numberArray2);

    expect(mergeSort2).to.deep.equal([10, 12, 14, 27, 38, 39, 58, 62, 62, 106]);
  })

  it('should even sort negative numbers', () => {
    let numberArray3 = [-2, -36, -19, -43, -87, -500, -19,]
    let mergeSort3 = mergeSort(numberArray3);

    expect(mergeSort3).to.deep.equal([-500, -87, -43, -36, -19, -19, -2])
  })

  it('should sort letters!', () => {
    let lettersArray = ['e', 'i', 'a', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'c', 'b', 'm'];
    let mergeAlpha = mergeSort(lettersArray);

    expect(mergeAlpha).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'])
  })

  it('gave me such a headache, so now it will sort the other half ot the alphabet', () => {
    let lettersArray2 = ['q', 'w', 'r', 't', 'y', 'u', 'o', 'p', 's', 'z', 'x', 'v', 'n'];
    let mergeAlpha2 = mergeSort(lettersArray2);
    let mergeRandom = [...lettersArray2].sort();
    console.log(mergeAlpha2);
    console.log(mergeRandom);

    expect(mergeAlpha2).to.deep.equal(['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
  })

  it('should sort any random amount of numbers, but cause it is mergeSort let us sort a lot of numbers', () => {
    let randomMergeArray = getRandomNums(100000);
    let mergeRandom = [...randomMergeArray].sort((a, b) => a - b);
    let mergeRandomSort = mergeSort(randomMergeArray)

    expect(mergeRandomSort).to.deep.equal(mergeRandom)
  })
})
