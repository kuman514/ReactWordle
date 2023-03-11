import { Alphabet, AppState, TryResult } from '^/types';
import wordList from '^/contents/WordList';

export function pickRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const pickedAnswer = wordList[randomIndex];
  const randomNumber = randomIndex + 1;

  return {
    questionNumber: randomNumber,
    answer: pickedAnswer,
  };
}

export function selectWord(index: number) {
  if (index < 0 || index >= wordList.length) {
    return pickRandomWord();
  }
  return {
    questionNumber: index + 1,
    answer: wordList[index],
  };
}

const wordListSet = new Set(wordList);
export function isInWordList(word: string) {
  return wordListSet.has(word);
}

export function getInitState(wordId?: number): AppState {
  return {
    ...(wordId ? selectWord(wordId - 1) : pickRandomWord()),
    curTry: 0,
    inputs: ['', '', '', '', '', ''],
    letterResult: {
      a: TryResult.UNTRIED,
      b: TryResult.UNTRIED,
      c: TryResult.UNTRIED,
      d: TryResult.UNTRIED,
      e: TryResult.UNTRIED,
      f: TryResult.UNTRIED,
      g: TryResult.UNTRIED,
      h: TryResult.UNTRIED,
      i: TryResult.UNTRIED,
      j: TryResult.UNTRIED,
      k: TryResult.UNTRIED,
      l: TryResult.UNTRIED,
      m: TryResult.UNTRIED,
      n: TryResult.UNTRIED,
      o: TryResult.UNTRIED,
      p: TryResult.UNTRIED,
      q: TryResult.UNTRIED,
      r: TryResult.UNTRIED,
      s: TryResult.UNTRIED,
      t: TryResult.UNTRIED,
      u: TryResult.UNTRIED,
      v: TryResult.UNTRIED,
      w: TryResult.UNTRIED,
      x: TryResult.UNTRIED,
      y: TryResult.UNTRIED,
      z: TryResult.UNTRIED,
    },
    submitResult: [],
    correctLetters: 0,
    alertMessage: '',
    showResult: true,
    alternativeAlert: false,
  };
}

export function onInput(state: AppState, letter: Alphabet): AppState {
  if (state.curTry >= 6 || state.correctLetters === 5) {
    return {
      ...state,
      alertMessage: 'This game has been already finished. Refresh app to restart.',
      alternativeAlert: !state.alternativeAlert,
    };
  }

  if (state.inputs[state.curTry].length >= 5) {
    return state;
  }

  const newInputs = Array.from(state.inputs);
  newInputs[state.curTry] += letter;

  return {
    ...state,
    inputs: newInputs,
  };
}

export function onErase(state: AppState): AppState {
  if (state.curTry >= 6) {
    return state;
  }

  if (state.inputs[state.curTry].length <= 0) {
    return state;
  }

  const newInputs = Array.from(state.inputs);
  newInputs[state.curTry] = newInputs[state.curTry].slice(0, newInputs[state.curTry].length - 1);

  return {
    ...state,
    inputs: newInputs,
  };
}

export function onSubmit(state: AppState): AppState {
  if (state.curTry >= 6 || state.correctLetters === 5) {
    return {
      ...state,
      alertMessage: 'This game has been already finished. Refresh app to restart.',
      alternativeAlert: !state.alternativeAlert,
    };
  }

  if (state.inputs[state.curTry].length !== 5) {
    return {
      ...state,
      alertMessage: 'Not enough letters.',
      alternativeAlert: !state.alternativeAlert,
    };
  }

  if (!isInWordList(state.inputs[state.curTry])) {
    return {
      ...state,
      alertMessage: 'Not in word list.',
      alternativeAlert: !state.alternativeAlert,
    };
  }

  // Todo: examine current line to answer
  const newLetterResult = {
    ...state.letterResult,
  };
  const newSubmitResult = Array.from(state.submitResult);
  const curSubmitReuslt: TryResult[] = [];
  let newCorrectLetters = 0;

  for (let i = 0; i < state.inputs[state.curTry].length; i++) {
    const curLetter = state.inputs[state.curTry][i] as Alphabet;
    let found = false;

    // Get Correct
    if (curLetter === state.answer[i]) {
      found = true;
      newLetterResult[curLetter] = TryResult.CORRECT;
      curSubmitReuslt.push(TryResult.CORRECT);
      newCorrectLetters++;
    }

    // Get Existing
    for (let j = 0; j < state.answer.length && !found; j++) {
      if (i === j) {
        continue;
      }

      if (curLetter === state.answer[j]) {
        found = true;
        if (newLetterResult[curLetter] === TryResult.UNTRIED) {
          newLetterResult[curLetter] = TryResult.EXISTING;
        }
        curSubmitReuslt.push(TryResult.EXISTING);
        break;
      }
    }

    // Get Never
    if (!found) {
      newLetterResult[curLetter] = TryResult.NEVER;
      curSubmitReuslt.push(TryResult.NEVER);
    }
  }
  newSubmitResult.push(curSubmitReuslt);

  const newTry = state.curTry + 1;
  const newShowResult = (newCorrectLetters === 5) || (newTry >= 6);

  return {
    ...state,
    letterResult: newLetterResult,
    submitResult: newSubmitResult,
    curTry: newTry,
    correctLetters: newCorrectLetters,
    alertMessage: '',
    showResult: newShowResult,
  };
}

export function onOpenResult(state: AppState): AppState {
  return {
    ...state,
    showResult: true,
  };
}

export function onCloseResult(state: AppState): AppState {
  return {
    ...state,
    showResult: false,
  };
}

export function onRandomReset(state: AppState): AppState {
  return {
    ...state,
    ...getInitState(),
  };
}

export function onSelectReset(state: AppState, wordId: number): AppState {
  return {
    ...state,
    ...getInitState(wordId),
  };
}
