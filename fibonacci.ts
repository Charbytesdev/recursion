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

console.log(fibs(13));
