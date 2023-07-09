import { useEffect } from 'react';

interface UseGlobalKeyDownParameters {
  handleOnKeyDown: (event: KeyboardEvent) => void;
}

export function useGlobalKeyDown({ handleOnKeyDown }: UseGlobalKeyDownParameters) {
  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown);

    return () => {
      document.removeEventListener('keydown', handleOnKeyDown);
    };
  }, []);
}
