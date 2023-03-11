import React from 'react';

import useAppStore from '^/store';

interface Props {
  lineNo: number;
  colNo: number
}

function Tile({ lineNo, colNo }: Props) {
  const { inputs, curTry, submitResult } = useAppStore();

  const inputLetter = inputs[lineNo][colNo] ?? '';
  const thisSubmitResult = lineNo < curTry ? submitResult[lineNo][colNo] : '';

  return (
    <span
      className={`Tile ${thisSubmitResult}`}
    >
      { inputLetter }
    </span>
  );
}

export default Tile;
