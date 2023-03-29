import React, { useEffect } from 'react';
import axios from 'axios';
import '^/App.css';

import Board from '^/components/Board';
import Title from '^/components/Title';
import AlertIndicator from '^/components/AlertIndicator';
import TouchInput from '^/components/TouchInput';
import ResultButton from '^/components/ResultButton';
import Result from '^/components/Result';
import LoadingScreen from '^/components/LoadingScreen';
import useAppStore from '^/store';
import { Alphabet, AxiosGetWordleWordListResponse } from '^/types';

// Initialize keydown event
function handleOnKeyDown(event: KeyboardEvent) {
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
      useAppStore.getState().submit();
      break;
    case 'Backspace':
      useAppStore.getState().erase();
      break;
    default:
      break;
  }
}

function App() {
  const { wordList, loadWordList, randomReset } = useAppStore();
  useEffect(() => {
    if (!wordList) {
      (async () => {
        try {
          const response = await axios.get<AxiosGetWordleWordListResponse>('https://read-only-api-endpoints-kuman514.vercel.app/react-wordle/word-list');
          if (response.status === 200) {
            loadWordList(response.data.data);
            randomReset();
          }
        } catch (e) {
          if (axios.isAxiosError(e)) {
            // eslint-disable-next-line no-console
            console.error(e);
          }
        }
      })();
    }
  }, [wordList]);

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown);

    return () => {
      document.removeEventListener('keydown', handleOnKeyDown);
    };
  }, []);

  const display = wordList ? (
    <>
      <Title />
      <AlertIndicator />
      <Board />
      <TouchInput />
      <ResultButton />
      <Result />
    </>
  ) : (
    <LoadingScreen />
  );

  return (
    <div className="App">
      {display}
    </div>
  );
}

export default App;
