import React, { useState } from 'react';
import '^/App.css';

import Board from '^/components/Board';
import Title from '^/components/Title';
import AlertIndicator from '^/components/AlertIndicator';
import TouchInput from '^/components/TouchInput';
import ResultButton from '^/components/ResultButton';
import Result from '^/components/Result';
import LoadingScreen from '^/components/LoadingScreen';
import ErrorScreen from '^/components/ErrorScreen';

import useAppStore from '^/store';
import { Alphabet } from '^/types';
import { useLoadWordList } from '^/hooks/useLoadWordList';
import { useGlobalKeyDown } from '^/hooks/useGlobalKeyDown';

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
  const [isError, setIsError] = useState<boolean>(false);
  const { wordList, loadWordList, randomReset } = useAppStore();

  useLoadWordList({
    wordList,
    onSuccess: (recievedWordList) => {
      loadWordList(recievedWordList);
      randomReset();
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      setIsError(true);
    },
  });

  useGlobalKeyDown({ handleOnKeyDown });

  const noWordListDisplay = isError ? (
    <ErrorScreen />
  ) : (
    <LoadingScreen />
  );

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
    noWordListDisplay
  );

  return (
    <div className="App">
      {display}
    </div>
  );
}

export default App;
