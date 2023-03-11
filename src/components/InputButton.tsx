import React from 'react';

import useAppStore from '^/store';
import { Alphabet } from '^/types';

interface Props {
  letter: Alphabet;
}

function InputButton({ letter }: Props) {
  const { input, letterResult } = useAppStore();
  const thisLetterResult = letterResult[letter];

  return (
    <button
      className={`InputButton ${thisLetterResult}`}
      onClick={() => {
        input(letter);
      }}
    >
      { letter }
    </button>
  );
}

export default InputButton;
