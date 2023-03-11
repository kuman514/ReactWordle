import React from 'react';

import useAppStore from '^/store';

function ResultButton() {
  const {
    curTry,
    correctLetters,
    openResult,
    randomReset,
  } = useAppStore();

  const complete = (curTry >= 6 || correctLetters === 5);

  return complete ? (
    <div className="ResultButtonSets">
      <button
        className="ResultButton"
        onClick={() => {
          openResult();
        }}
      >
        Reopen Result
      </button>
      <button
        className="ResultButton"
        onClick={() => {
          randomReset();
        }}
      >
        Random Reset
      </button>
    </div>
  ) : null;
}

export default ResultButton;
