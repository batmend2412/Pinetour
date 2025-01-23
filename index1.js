// const numbers = [1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10];
// let sumNum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sumNum += numbers[i];
// }
// console.log(sumNum);

// exercise - 2;

// const numbers = [1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[0] < numbers[i]) {
//     for (let j = i; j < numbers.length; j++) {
//       if (numbers[i] < numbers[j]) {
//         console.log("hamgiinih utga" + numbers[j]);
//       }
//     }
//   }
// }

// exercise - 3;

// const numbers = [1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10];
// let oddNum = [];
// let EvenNum = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     oddNum.push(numbers[i]);
//   } else {
//     EvenNum.push(numbers[i]);
//   }
// }
// console.log(oddNum, EvenNum);

// exercise - 4;

// const numbers = [1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] * 2);

// }
// console.log(result);
// function doubleNumber(numbers) {
//   return numbers.map((value) => value * 2);
// }
// console.log(doubleNumber(numbers));

// exercise - 2;
// /2-р болдлого */;
// const numbers = [1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10];
// let maxNum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > maxNum) {
//     maxNum = numbers[i];
//   }
// }
// console.log(maxNum);

// exercise - 5;
// const numbers = [1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10];
// let positive=true
// for (let i = 0; i < array.length; i++) {
//   if (numbers[i] < 0) {
//     break
//   }
// }
// console.log(positive);

// function maxNum(values) {
//   let maxNum = values[0];
//   values.forEach((value) => {
//     if (value > maxNum) {
//       maxNum = value;
//     }
//   });
//   return maxNum;
// }
// console.log(maxNum([223, 445, 667, 222, 334]));
// 2 element swap
// const nums=[4,-2,3,2]
// let temp= nums[0]
// nums[0]=nums[1]
// nums[0]=temp

// const numbers = [4, -2, 0, 3, 2];
// let sorNum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   let min = numbers[i];
//   if (numbers[i] > numbers[numbers.length - 1]) {
//     numbers[i] = numbers[numbers.length - 1];
//     numbers[numbers.length - 1] = min;
//   }
// }
// console.log(numbers);

const array = [4, -2, 0, 3, 2];
for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (array[i + 1] !== undefined) {
      if (array[i] > array[j + 1]) {
        let temp = array[i];
        array[i] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
console.log(array);
