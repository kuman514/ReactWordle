import { useEffect } from 'react';
import axios from 'axios';

import { AxiosGetWordleWordListResponse } from '^/types';

interface UseLoadWordListParameters {
  wordList: string[] | undefined;
  onSuccess: (recievedWordList: string[]) => void;
  onError: (...params: unknown[]) => void;
}

export function useLoadWordList({
  wordList, onSuccess, onError,
}: UseLoadWordListParameters) {
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
          onSuccess(response.data.data);
        }
      } catch (e) {
        if (axios.isAxiosError(e)) {
          onError(e);
        }
      }
    })();
  }, [wordList]);
}
