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
          Title
        </div>

        <div>
          Content
        </div>

        <div>
          <button>
            Share
          </button>
          <button>
            Share
          </button>
          <button>
            Share
          </button>
          <button>
            Share
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
