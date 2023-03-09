import wordList from './WordList';

export function pickRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const pickedAnswer = wordList[randomIndex];
  const randomNumber = randomIndex + 1;

  return [randomNumber, pickedAnswer];
}

export function selectWord(index) {
  if (index < 0 || index >= wordList.length) {
    return pickRandomWord();
  } else {
    return [index, wordList[index]];
  }
}

const [questionNumber, answer] = pickRandomWord();

export const QUESTION_NUMBER = questionNumber;
export const ANSWER = answer;

const wordListSet = new Set(wordList);

export function isInWordList(word) {
  if (wordListSet.has(word)) {
    return true;
  }

  return false;
}
