import React from 'react';
import './App.css';

import Board from './components/Board';
import Title from './components/Title';
import AlertIndicator from './components/AlertIndicator';
import TouchInput from './components/TouchInput';
import ResultButton from './components/ResultButton';
import Result from './components/Result';
import useAppStore from './store';
import { Alphabet } from './types';

// Initialize keydown event
document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyA': case 'KeyB': case 'KeyC': case 'KeyD': case 'KeyE':
    case 'KeyF': case 'KeyG': case 'KeyH': case 'KeyI': case 'KeyJ':
    case 'KeyK': case 'KeyL': case 'KeyM': case 'KeyN': case 'KeyO':
    case 'KeyP': case 'KeyQ': case 'KeyR': case 'KeyS': case 'KeyT':
    case 'KeyU': case 'KeyV': case 'KeyW': case 'KeyX': case 'KeyY':
    case 'KeyZ':
      useAppStore.getState().input(event.key.toLowerCase() as Alphabet);
      break;
    case 'Enter':
      if (document.activeElement?.nodeName !== 'BUTTON') {
        useAppStore.getState().submit();
      }
      break;
    case 'Backspace':
      useAppStore.getState().erase();
      break;
    default:
      break;
  }
});

function App() {
  return (
    <div className="App">
      <Title />
      <AlertIndicator />
      <Board />
      <TouchInput />
      <ResultButton />
      <Result />
    </div>
  );
}

export default App;
