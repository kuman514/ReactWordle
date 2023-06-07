import React from 'react';

import useAppStore from '^/store';
import { GameResult, TryResult } from '^/types';

function Result() {
  const {
    questionNumber,
    answer,
    showResult,
    curTry,
    correctLetters,
    submitResult,
    closeResult,
  } = useAppStore();

  const compelted = (curTry >= 6 || correctLetters === 5);
  // eslint-disable-next-line no-nested-ternary
  const processResult = correctLetters === 5 ? GameResult.COMPLETE : (
    curTry >= 6 ? GameResult.FAILED : GameResult.PLAYING
  );

  const resultInformation = {
    questionNumber,
    answer: answer.toUpperCase(),
    submitResults: submitResult,
  };

  const shareOnTwitter = () => {
    let tweet = `https://twitter.com/intent/tweet?url=https%3A//react-wordle-kuman514.vercel.app/ReactWordle&text=kuman514%27s%20React%20Wordle%20${resultInformation.questionNumber}%0A`;

    tweet += `Tries%3A%20${curTry}%20%2F%206${processResult === GameResult.FAILED ? '%20(Failed)' : ''}%0A`;

    resultInformation.submitResults?.forEach((line) => {
      line.forEach((item) => {
        switch (item) {
          case TryResult.EXISTING:
            tweet += '🟪';
            break;
          case TryResult.CORRECT:
            tweet += '🟩';
            break;
          case TryResult.NEVER:
            tweet += '🟥';
            break;
          default:
            tweet += '⬛️';
            break;
        }
      });
      tweet += '%0A';
    });

    window.open(tweet, '_blank');
  };

  if (compelted && showResult) {
    return (
      <div className={`Result ${processResult}`}>
        <div className="ResultContent">
          <div>
            {
              (() => {
                switch (processResult) {
                  case GameResult.COMPLETE:
                    return 'Game Complete!';
                  case GameResult.FAILED:
                    return 'Failed To Guess...';
                  default:
                    return null;
                }
              })()
            }
          </div>

          <div>
            The answer was {resultInformation.answer.toUpperCase()}
          </div>

          <div>
            <div>
              Tries: {curTry} / 6
            </div>
            <div>
              {
                resultInformation.submitResults.map((line, index) => (
                  <div key={`ResultLine-${index + 1}`}>
                    {
                      line.map((item) => {
                        switch (item) {
                          case TryResult.EXISTING:
                            return '🟪';
                          case TryResult.CORRECT:
                            return '🟩';
                          case TryResult.NEVER:
                            return '🟥';
                          default:
                            return '⬛️';
                        }
                      })
                    }
                  </div>
                ))
              }
            </div>
          </div>

          <div>
            <button
              className="ResultButton"
              onClick={() => {
                shareOnTwitter();
              }}
            >
              Share On Twitter
            </button>
          </div>

          <div>
            <button
              className="ResultButton"
              onClick={() => {
                closeResult();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Result;
