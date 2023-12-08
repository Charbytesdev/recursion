function fibs(num: number) {
  const res: number[] = [];
  let a = 0,
    b = 1;
  if (num >= 1) res.push(0);
  if (num >= 2) res.push(1);
  for (let i = 2; i < num; i++) {
    let c = a + b;
    a = b;
    b = c;
    res.push(b);
  }
  return res;
}

function fibsRec(num: number): number {
  if (num === 1) return 0;
  else if (num === 2) return 1;
  else return fibsRec(num - 1) + fibsRec(num - 2);
}

function merge(arr1: number[], arr2: number[]) {
  let i = 0,
    j = 0,
    res: number[] = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) res[i + j] = arr1[i++];
    else res[i + j] = arr2[j++];
  }
  while (i < arr1.length) res[i + j] = arr1[i++];
  while (j < arr2.length) res[i + j] = arr2[j++];
  return res;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, mid),
    arr2 = arr.slice(mid, arr.length);
  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  return merge(mergeSort(arr1), mergeSort(arr2));
}

console.log(mergeSort([9, 2, 12, 432, 3, 0, -5]));
