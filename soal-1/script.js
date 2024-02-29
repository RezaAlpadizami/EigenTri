const reverseAlphabetWithNumberEnd = (text) => {
  let alphabets = text.split("");

  alphabets = alphabets.reverse();

  let firstNumberIndex = alphabets.findIndex((val) => !isNaN(parseInt(val)));

  if (firstNumberIndex !== -1) {
    let number = alphabets.splice(firstNumberIndex, 1)[0];
    alphabets.push(number);
  }

  return alphabets.join("");
};

const reversedText = reverseAlphabetWithNumberEnd("NEGIE1");
console.log(reversedText);
