import { 
  useSelector,
  useDispatch
} from 'react-redux';

function Result() {
  /*
    State of Result
      - show: boolean from store -> showResult
      - tries: number from store -> curTry
      - correctLetters: number from store -> correctLetters
      - completed: boolean -> (tries >= 6 || correctLetters === 5)
      - processResult: string -> (correctLetters === 5 ? 'Complete' : (tries >= 6 ? 'Failed' : ''))
      - resultInformation: object from store -> {
          questionNumber: number from store -> questionNumber
          answer: string from store -> answer
          submitResults: string[][] from store -> submitResult
        }
  */

  const showSelector = (state) => {
    return state.showResult;
  };
  const show = useSelector(showSelector);

  const triesSelector = (state) => {
    return state.curTry;
  };
  const tries = useSelector(triesSelector);

  const correctLettersSelector = (state) => {
    return state.correctLetters;
  };
  const correctLetters = useSelector(correctLettersSelector);

  const compelted = (tries >= 6 || correctLetters === 5);
  const processResult = (correctLetters === 5 ? 'Complete' : (tries >= 6 ? 'Failed' : ''));

  const resultInformationSelector = (state) => {
    if (state.curTry >= 6 || state.correctLetters === 5) {
      return {
        questionNumber: state.questionNumber,
        answer: state.answer.toUpperCase(),
        submitResults: state.submitResult
      };
    } else {
      return {};
    }
  };
  const resultInformation = useSelector(resultInformationSelector);

  const dispatch = useDispatch();

  const shareOnTwitter = () => {
    let tweet = `https://twitter.com/intent/tweet?url=https%3A//kuman514.github.io/ReactWordle&text=kuman514%27s%20React%20Wordle%20${resultInformation.questionNumber}%0A`;

    tweet += `Tries%3A%20${tries}%20%2F%206${processResult === 'Failed' ? '%20(Failed)' : ''}%0A`;

    resultInformation.submitResults.forEach((line) => {
      line.forEach((item) => {
        switch (item) {
          case 'Existing':
            tweet += '🟪';
            break;
          case 'Correct':
            tweet += '🟩';
            break;
          case 'Never':
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

  if (compelted && show) {
    return (
      <div
        className={`Result ${processResult}`}
      >
        <div className="ResultContent">
          <div>
            {
              (processResult === 'Complete') ? (
                'Game Complete!'
              ) : (
                (processResult === 'Failed') ? (
                  'Failed To Guess...'
                ) : (
                  null
                )
              )
            }
          </div>

          <div>
            The answer was {resultInformation.answer.toUpperCase()}
          </div>

          <div>
            <div>
              Tries: {tries} / 6
            </div>
            <div>
              {
                resultInformation.submitResults.map((line, index) => {
                  return (
                    <div key={`ResultLine-${index}`}>
                      {
                        line.map((item) => {
                          switch (item) {
                            case 'Existing':
                              return '🟪';
                            case 'Correct':
                              return '🟩';
                            case 'Never':
                              return '🟥';
                            default:
                              return '⬛️';
                          }
                        })
                      }
                    </div>
                  );
                })
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
                dispatch({
                  type: 'CLOSERESULT'
                });
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Result;
