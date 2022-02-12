import {
  useSelector,
  useDispatch
} from 'react-redux';

function InputButton(props) {
  /*
    Props of InputButton
      - letter: string length 1
    
    State of InputButton
      - letterResult: string from store -> letterResult[props.letter]
  */

  const letterResultSelector = (state) => {
    return state.letterResult[props.letter];
  };
  const letterResult = useSelector(letterResultSelector);

  const dispatch = useDispatch();

  return (
    <button
      className={`InputButton ${letterResult}`}
      onClick={() => {
        dispatch({
          type: 'INPUT',
          payload: {
            letter: props.letter
          }
        });
      }}
    >
      { props.letter }
    </button>
  );
}

export default InputButton;
