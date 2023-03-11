import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { AppAction, AppState } from '^/types';
import {
  getInitState,
  onCloseResult,
  onErase,
  onInput,
  onOpenResult,
  onRandomReset,
  onSelectReset,
  onSubmit,
} from './functions';

const useAppStore = create<AppState & AppAction>()(
  devtools(
    persist(
      (set) => ({
        ...getInitState(),
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
