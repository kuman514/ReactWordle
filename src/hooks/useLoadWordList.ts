import { useEffect, useState } from 'react';
import axios from 'axios';

import { AxiosGetWordleWordListResponse } from '^/types';
import useAppStore from '^/store';

export function useLoadWordList() {
  const [isError, setIsError] = useState<boolean>(false);
  const wordList = useAppStore((state) => state.wordList);
  const loadWordList = useAppStore((state) => state.loadWordList);
  const randomReset = useAppStore((state) => state.randomReset);

  useEffect(() => {
    if (wordList !== undefined) {
      return;
    }

    (async () => {
      try {
        const response = await axios.get<AxiosGetWordleWordListResponse>(
          import.meta.env.VITE_GET_WORDS_ENDPOINT,
        );
        if (response.status === 200) {
          loadWordList(response.data.data);
          randomReset();
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // eslint-disable-next-line no-console
          console.error(error);
          setIsError(true);
        }
      }
    })();
  }, [wordList]);

  return {
    wordList,
    isError,
  };
}
