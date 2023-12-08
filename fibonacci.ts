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

console.log(fibsRec(13));
