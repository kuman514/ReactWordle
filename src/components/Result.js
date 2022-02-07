function Result(props) {
  /*
    Props of Result
      - gameProcess: 'Playing' | 'Complete' | 'Failed',
      - showResult: boolean
      - tries: number
      - questionNumber: number
      - submitResults: string[][]
      - onClickClose: function (void)
  */
  
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
          <button>
            Share On Twitter
          </button>
        </div>

        <div>
          <button
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
