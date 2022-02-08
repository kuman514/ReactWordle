function Result(props) {
  /*
    Props of Result
      - gameProcess: 'Playing' | 'Complete' | 'Failed',
      - showResult: boolean
      - tries: number
      - questionNumber: number
      - answer: string
      - submitResults: string[][]
      - onClickClose: function (void)
  */

  const shareOnTwitter = () => {
    let tweet = `https://twitter.com/intent/tweet?url=https%3A//kuman514.github.io/ReactWordle&text=kuman514%27s%20React%20Wordle%20${props.questionNumber}%0A`;

    tweet += `Tries%3A%20${props.tries}%20%2F%206%0A`;

    props.submitResults.forEach((line) => {
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
  
  return (
    <div
      className={`Result ${props.gameProcess} ${props.showResult ? '' : 'Hidden'}`}
    >
      <div className="ResultContent">
        <div>
          {
            (props.gameProcess === 'Complete') ? (
              'Game Complete!'
            ) : (
              (props.gameProcess === 'Failed') ? (
                'Failed To Guess...'
              ) : (
                null
              )
            )
          }
        </div>

        <div>
          The answer was {props.answer.toUpperCase()}
        </div>

        <div>
          <div>
            Tries: {props.tries} / 6
          </div>
          <div>
            {
              props.submitResults.map((line, index) => {
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
              if (props.onClickClose) {
                props.onClickClose();
              }
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
