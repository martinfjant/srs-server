export const sm2 = (
  answer: number,
  prevanswers: number[],
  a = 6.0,
  b = -0.8,
  c = 0.28,
  d = 0.02,
  theta = 0.2,
) => {
  if (answer < 4) {
    return 1;
  }

  const history = [answer, ...prevanswers];

  // Calculate latest correctness streak
  const streak = history.filter(
    (historynumber: number): boolean => historynumber >= 3,
  ).length;
  if (streak < 3) {
    return 1;
  }

  // Sum up the history
  const historySum = history.reduce(
    (prev, val) => prev + (b + c * val + d * val * val),
    0,
  );

  return a * Math.pow(Math.max(1.3, 2.5 + historySum), theta * streak);
};
