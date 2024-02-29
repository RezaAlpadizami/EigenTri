Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

// METHOD 1

const subtractBetweenDiagonals = (matrix) => {
  const n = matrix.length;
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < n; i++) {
    diagonal1 += matrix[i][i];
    diagonal2 += matrix[i][n - i - 1];
  }

  return diagonal1 - diagonal2;
};

const result = subtractBetweenDiagonals(Matrix);
console.log(result);

// METHOD 2

const subtractBetweenDiagonalsOther = (matrix) => {
  const n = matrix.length;

  const diagonal1 = matrix.reduce((acc, row, index) => acc + row[index], 0);

  const diagonal2 = matrix.reduce(
    (acc, row, index) => acc + row[n - index - 1],
    0
  );

  return diagonal1 - diagonal2;
};

const result2 = subtractBetweenDiagonalsOther(Matrix);
console.log(result2);
