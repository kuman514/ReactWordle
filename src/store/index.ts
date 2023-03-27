import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { AppAction, AppState } from '^/types';
import {
  getInitGameState,
  onCloseResult,
  onErase,
  onInput,
  onLoadWordList,
  onOpenResult,
  onRandomReset,
  onSelectReset,
  onSubmit,
} from './functions';

const useAppStore = create<AppState & AppAction>()(
  devtools(
    persist(
      (set) => ({
        questionNumber: -1,
        answer: 'Not Loaded',
        ...getInitGameState(),
        loadWordList: (wordList) => set((state) => onLoadWordList(state, wordList)),
        input: (letter) => set((state) => onInput(state, letter)),
        erase: () => set((state) => onErase(state)),
        submit: () => set((state) => onSubmit(state)),
        openResult: () => set((state) => onOpenResult(state)),
        closeResult: () => set((state) => onCloseResult(state)),
        randomReset: () => set((state) => onRandomReset(state)),
        selectReset: (wordId) => set((state) => onSelectReset(state, wordId)),
      }),
      {
        name: 'react-wordle-storage',
      },
    ),
  ),
);

export default useAppStore;
