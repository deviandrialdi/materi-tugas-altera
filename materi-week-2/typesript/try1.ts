let a: string = "hello world";
let b = "Hello world";

a = "Lorem Ipsum";
b = "123";

// typescript statistic(tidak bisa diubah2) sedangkan javascript dinamis(bisa ubah2)

console.log(b); // ts-node try1 atau node try1

function binarySearch(array: Array<number>, target: number) {
  console.time("binarySearch");
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      console.timeEnd("binarySearch");
      return middle;
    } else if (array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  console.timeEnd("binarySearch");
  return -1;
}

const array = [
  67, 79, 90, 81, 59, 38, 85, 77, 57, 63, 53, 84, 27, 51, 22, 6, 76, 73, 21, 75,
  66, 55, 11, 12, 68, 60, 52, 83, 24, 20, 26, 95, 70, 17, 54, 72, 8, 30, 45, 16,
  56, 19, 61, 33, 36, 91, 4, 39, 25, 47, 28, 93, 48, 89, 5, 71, 15, 65, 23, 87,
  10, 1, 3, 2, 29, 40, 9, 78, 50, 7, 13, 58, 31, 100, 94, 69, 97, 34, 41, 18,
  74, 88, 35, 49, 99, 14, 82, 86, 62, 80, 44, 43, 32, 42, 64, 96, 46, 92, 37,
  98,
];
const dupeSorted = array.slice().sort((a, b) => {
  return a - b;
});

console.log(binarySearch(dupeSorted, 58)); // 51
console.log(binarySearch(dupeSorted, 101)); // -1
