import { createStore } from 'redux';

const initState = {
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
      break;
    case 'ERASE':
      break;
    case 'SUBMIT':
      break;
    case 'OPENRESULT':
      break;
    case 'CLOSERESULT':
      break;
    default:
      return state;
  }
}

export const store = createStore(onDispatch);
