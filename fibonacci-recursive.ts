function fibsRec(num: number): number {
  if (num === 1) return 0;
  else if (num === 2) return 1;
  else return fibsRec(num - 1) + fibsRec(num - 2);
}
