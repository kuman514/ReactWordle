import { createStore } from 'redux';

import {
  QUESTION_NUMBER,
  ANSWER
} from './contents/WordPicker';
import {
  onInput,
  onErase,
  onSubmit,
  onOpenResult,
  onCloseResult
} from './StoreFunctions';

const initState = {
  questionNumber: QUESTION_NUMBER,
  answer: ANSWER,
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
  showResult: false,
  alternativeAlert: false
};

function onDispatch(state = initState, action) {
  /*
    action.payload in each actions
    
    INPUT: {
      letter: string (length 1)
    }
    ERASE: { (empty) }
    SUBMIT: { (empty) }
    OPENRESULT: { (empty) }
    CLOSERESULT: { (empty) }
  */
  
  switch (action.type) {
    case 'INPUT':
      return onInput(state, action.payload);
    case 'ERASE':
      return onErase(state);
    case 'SUBMIT':
      return onSubmit(state);
    case 'OPENRESULT':
      return onOpenResult(state);
    case 'CLOSERESULT':
      return onCloseResult(state);
    default:
      return state;
  }
}

export const store = createStore(onDispatch);
