import { useState } from 'react';

import Line from './Line';
import TouchInput from './TouchInput';
import Result from './Result';

function Board(props) {
  /*
    Props of Board
      - answer: string (length exactly 5)
      - questionNumber: number
  */

  const [status, setStatus] = useState({
    curTry: 0,
    inputs: ['', '', '', '', '', ''],
    letterResult: {
      'a': 'Untried', 'b': 'Untried', 'c': 'Untried', 'd': 'Untried',
      'e': 'Untried', 'f': 'Untried', 'g': 'Untried', 'h': 'Untried',
      'i': 'Untried', 'j': 'Untried', 'k': 'Untried', 'l': 'Untried',
      'm': 'Untried', 'n': 'Untried', 'o': 'Untried', 'p': 'Untried',
      'q': 'Untried', 'r': 'Untried', 's': 'Untried', 't': 'Untried',
      'u': 'Untried', 'v': 'Untried', 'w': 'Untried', 'x': 'Untried',
      'y': 'Untried', 'z': 'Untried'
    },
    submitResult: [],
    correctLetters: 0
  });

  const onErase = () => {
    if (status.curTry >= 6) {
      return;
    }

    if (status.inputs[status.curTry].length <= 0) {
      return;
    }

    const newInputs = Array.from(status.inputs);
    newInputs[status.curTry] = newInputs[status.curTry].slice(0, newInputs[status.curTry].length - 1);

    setStatus({
      ...status,
      inputs: newInputs
    });
  };

  const onSubmit = () => {
    if (status.curTry >= 6) {
      return;
    }

    if (status.inputs[status.curTry].length !== 5) {
      return;
    }

    // Todo: examine current line to answer
    const newLetterResult = {
      ...status.letterResult
    };
    const newSubmitResult = Array.from(status.submitResult);
    const curSubmitReuslt = [];
    let newCorrectLetters = 0;

    for (let i = 0; i < status.inputs[status.curTry].length; i++) {
      const curLetter = status.inputs[status.curTry][i];
      let found = false;

      // Get Correct
      if (curLetter === props.answer[i]) {
        found = true;
        newLetterResult[curLetter] = 'Correct';
        curSubmitReuslt.push('Correct');
        newCorrectLetters++;
      }

      // Get Existing
      for (let j = 0; j < props.answer.length && !found; j++) {
        if (i === j) {
          continue;
        }

        if (curLetter === props.answer[j]) {
          found = true;
          if (newLetterResult[curLetter] === 'Untried') {
            newLetterResult[curLetter] = 'Existing';
          }
          curSubmitReuslt.push('Existing');
          break;
        }
      }

      // Get Never
      if (!found) {
        newLetterResult[curLetter] = 'Never';
        curSubmitReuslt.push('Never');
      }
    }
    newSubmitResult.push(curSubmitReuslt);

    setStatus({
      ...status,
      letterResult: newLetterResult,
      submitResult: newSubmitResult,
      curTry: status.curTry + 1,
      correctLetters: newCorrectLetters
    });
  };

  const onInput = (letter) => {
    if (status.curTry >= 6) {
      return;
    }

    if (status.inputs[status.curTry].length >= 5) {
      return;
    }

    const newInputs = Array.from(status.inputs);
    newInputs[status.curTry] += letter;

    setStatus({
      ...status,
      inputs: newInputs
    });
  };

  return (
    <div className="Board">
      <div className="Lines">
        {
          [0, 1, 2, 3, 4, 5].map((index) => {
            return (
              <Line
                key={`try_${index}`}
                try={index}
                submitted={index < status.curTry}
                input={status.inputs[index]}
                letterResult={status.letterResult}
                submitResult={status.submitResult[index]}
              />
            );
          })
        }
      </div>
      
      <TouchInput
        result={status.letterResult}
        onInput={onInput}
        onErase={onErase}
        onSubmit={onSubmit}
      />

      <Result
        gameProcess={
          (status.correctLetters === 5) ? (
            'Complete'
          ) : (
            (status.curTry >= 6) ? (
              'Failed'
            ) : (
              'Playing'
            )
          )
        }
        tries={status.curTry}
        questionNumber={props.questionNumber}
        submitResult={status.submitResult}
      />
    </div>
  );
}

export default Board;
