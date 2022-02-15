import './App.css';

import { store } from './store/Store';

import Board from './components/Board';
import Title from './components/Title';
import AlertIndicator from './components/AlertIndicator';
import TouchInput from './components/TouchInput';
import ResultButton from './components/ResultButton';
import Result from './components/Result';

// Initialize keydown event
document.removeEventListener('keydown');
document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyA': case 'KeyB': case 'KeyC': case 'KeyD': case 'KeyE':
    case 'KeyF': case 'KeyG': case 'KeyH': case 'KeyI': case 'KeyJ':
    case 'KeyK': case 'KeyL': case 'KeyM': case 'KeyN': case 'KeyO':
    case 'KeyP': case 'KeyQ': case 'KeyR': case 'KeyS': case 'KeyT':
    case 'KeyU': case 'KeyV': case 'KeyW': case 'KeyX': case 'KeyY':
    case 'KeyZ':
      store.dispatch({
        type: 'INPUT',
        payload: {
          letter: event.key.toLowerCase()
        }
      });
      break;
    case 'Enter':
      if (document.activeElement.nodeName !== 'BUTTON') {
        store.dispatch({
          type: 'SUBMIT'
        });
      }
      break;
    case 'Backspace':
      store.dispatch({
        type: 'ERASE'
      });
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
