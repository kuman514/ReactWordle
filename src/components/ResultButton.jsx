import {
  useSelector,
  useDispatch
} from 'react-redux';

function ResultButton() {
  /*
    State of Result
      - complete: boolean from store -> curTry >= 6 || correctLetters === 5
  */

  const completeSelector = (state) => {
    return (state.curTry >= 6 || state.correctLetters === 5);
  };
  const complete = useSelector(completeSelector);

  const dispatch = useDispatch();

  if (complete) {
    return (
      <div className="ResultButtonSets">
        <button
          className="ResultButton"
          onClick={() => {
            dispatch({
              type: 'OPENRESULT'
            });
          }}
        >
          Reopen Result
        </button>
        <button
          className="ResultButton"
          onClick={() => {
            dispatch({
              type: 'RANDOMRESET'
            });
          }}
        >
          Random Reset
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default ResultButton;
