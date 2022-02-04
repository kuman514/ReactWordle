import wordList from './WordList.json';

function pickWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const pickedAnswer = wordList[randomIndex];
  const randomNumber = randomIndex + 1;

  return [randomNumber, pickedAnswer];
}

const [questionNumber, answer] = pickWord();

export const QUESTION_NUMBER = questionNumber;
export const ANSWER = answer;

const wordListSet = new Set(wordList);

export function isInWordList(word) {
  if (wordListSet.has(word)) {
    return true;
  }
  
  return false;
}
