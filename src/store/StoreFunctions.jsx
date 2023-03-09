import {
  isInWordList,
  pickRandomWord,
  selectWord
} from '../contents/WordPicker';

export function onInput(state, payload) {
  if (state.curTry >= 6 || state.correctLetters === 5) {
    console.log('This game has been already finished. Refresh app to restart.');
    return {
      ...state,
      alertMessage: 'This game has been already finished. Refresh app to restart.',
      alternativeAlert: !state.alternativeAlert
    };
  }

  if (state.inputs[state.curTry].length >= 5) {
    return state;
  }

  const newInputs = Array.from(state.inputs);
  newInputs[state.curTry] += payload.letter;

  return {
    ...state,
    inputs: newInputs
  };
}

export function onErase(state) {
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
    inputs: newInputs
  };
}

export function onSubmit(state) {
  if (state.curTry >= 6 || state.correctLetters === 5) {
    console.log('This game has been already finished. Refresh app to restart.');
    return {
      ...state,
      alertMessage: 'This game has been already finished. Refresh app to restart.',
      alternativeAlert: !state.alternativeAlert
    };
  }

  if (state.inputs[state.curTry].length !== 5) {
    console.log('Not enough letters.');
    return {
      ...state,
      alertMessage: 'Not enough letters.',
      alternativeAlert: !state.alternativeAlert
    };
  }

  if (!isInWordList(state.inputs[state.curTry])) {
    console.log('Not in word list.');
    return {
      ...state,
      alertMessage: 'Not in word list.',
      alternativeAlert: !state.alternativeAlert
    };
  }

  // Todo: examine current line to answer
  const newLetterResult = {
    ...state.letterResult
  };
  const newSubmitResult = Array.from(state.submitResult);
  const curSubmitReuslt = [];
  let newCorrectLetters = 0;

  for (let i = 0; i < state.inputs[state.curTry].length; i++) {
    const curLetter = state.inputs[state.curTry][i];
    let found = false;

    // Get Correct
    if (curLetter === state.answer[i]) {
      found = true;
      newLetterResult[curLetter] = 'Correct';
      curSubmitReuslt.push('Correct');
      newCorrectLetters++;
    }

    // Get Existing
    for (let j = 0; j < state.answer.length && !found; j++) {
      if (i === j) {
        continue;
      }

      if (curLetter === state.answer[j]) {
        found = true;
        if (newLetterResult[curLetter] === 'Untried') {
          newLetterResult[curLetter] = 'Existing';
        }
        curSubmitReuslt.push('Existing');
        break;
      }
    }

    // Get Never
    if (!found) {
      newLetterResult[curLetter] = 'Never';
      curSubmitReuslt.push('Never');
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
    showResult: newShowResult
  };
}

export function onOpenResult(state) {
  return {
    ...state,
    showResult: true
  };
}

export function onCloseResult(state) {
  return {
    ...state,
    showResult: false
  };
}

export function onRandomReset(state) {
  const [questionNumber, answer] = pickRandomWord();

  return {
    ...state,
    questionNumber: questionNumber,
    answer: answer,
    curTry: 0,
    inputs: ['', '', '', '', '', ''],
    letterResult: {
      'a': 'Untried', 'b': 'Untried', 'c': 'Untried', 'd': 'Untried',
      'e': 'Untried', 'f': 'Untried', 'g': 'Untried', 'h': 'Untried',
      'i': 'Untried', 'j': 'Untried', 'k': 'Untried', 'l': 'Untried',
      'm': 'Untried', 'n': 'Untried', 'o': 'Untried', 'p': 'Untried',
      'q': 'Untried', 'r': 'Untried', 's': 'Untried', 't': 'Untried',
      'u': 'Untried', 'v': 'Untried', 'w': 'Untried', 'x': 'Untried',
      'y': 'Untried', 'z': 'Untried'
    },
    submitResult: [],
    correctLetters: 0,
    alertMessage: '',
    showResult: true,
    alternativeAlert: false
  }
}

export function onSelectReset(state, payload) {
  const [questionNumber, answer] = selectWord(payload.index - 1);

  return {
    ...state,
    questionNumber: questionNumber,
    answer: answer,
    curTry: 0,
    inputs: ['', '', '', '', '', ''],
    letterResult: {
      'a': 'Untried', 'b': 'Untried', 'c': 'Untried', 'd': 'Untried',
      'e': 'Untried', 'f': 'Untried', 'g': 'Untried', 'h': 'Untried',
      'i': 'Untried', 'j': 'Untried', 'k': 'Untried', 'l': 'Untried',
      'm': 'Untried', 'n': 'Untried', 'o': 'Untried', 'p': 'Untried',
      'q': 'Untried', 'r': 'Untried', 's': 'Untried', 't': 'Untried',
      'u': 'Untried', 'v': 'Untried', 'w': 'Untried', 'x': 'Untried',
      'y': 'Untried', 'z': 'Untried'
    },
    submitResult: [],
    correctLetters: 0,
    alertMessage: '',
    showResult: true,
    alternativeAlert: false
  }
}
