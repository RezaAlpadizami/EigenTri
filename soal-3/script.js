const INPUT = ["xc", "dz", "bbb", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz", "xc"];

// METHOD 1

const countEncountersBetweenArrays = (input, query) => {
  const counts = [];

  for (let i = 0; i < query.length; i++) {
    const word = query[i];
    let count = 0;

    for (let j = 0; j < input.length; j++) {
      if (input[j] === word) {
        count++;
      }
    }

    counts.push(count);
  }

  return counts;
};

const result = countEncountersBetweenArrays(INPUT, QUERY);
console.log(result);

// METHOD 2

function countEncountersBetweenArraysOther(input, query) {
  return query.map((word) => input.filter((item) => item === word).length);
}

const resultMethod = countEncountersBetweenArraysOther(INPUT, QUERY);
console.log(resultMethod);
