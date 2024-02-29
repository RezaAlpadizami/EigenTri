const sentences = "Saya sangat senang mengerjakan soal algoritma";

// METHOD 1

const findLongestSentence = (sentences) => {
  const findSentence = sentences.split(" ");

  let longestSentence = "";
  let maxLength = 0;

  for (let i = 0; i < findSentence.length; i++) {
    const sentence = findSentence[i].replace(/[^\w\s]/gi, "");

    if (sentence.length > maxLength) {
      longestSentence = sentence;
      maxLength = sentence.length;
    }
  }

  return longestSentence;
};

console.log(findLongestSentence(sentences));

// METHOD 2

const findLongestSentenceOther = (sentences) => {
  return sentences
    .split(" ")
    .map((sentence) => sentence.replace(/[^\w\s]/gi, ""))
    .reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, "");
};

console.log(findLongestSentenceOther(sentences));
