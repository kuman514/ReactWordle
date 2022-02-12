import { useSelector } from 'react-redux';

function Tile(props) {
  /*
    Props of Tile
      - lineNo: number
      - colNo: number

    State of Tile
      - inputLetter: string length 0~1 from store -> inputs[props.lineNo][props.colNo]
      - submitResult: string from store -> submitResult[props.lineNo][props.colNo]
  */

  const inputLetterSelector = (state) => {
    if (state.inputs[props.lineNo][props.colNo]) {
      return state.inputs[props.lineNo][props.colNo];
    } else {
      return '';
    }
  };
  const inputLetter = useSelector(inputLetterSelector);

  const submitResultSelector = (state) => {
    if (props.lineNo < state.curTry) {
      return state.submitResult[props.lineNo][props.colNo];
    } else {
      return '';
    }
  };
  const submitResult = useSelector(submitResultSelector);

  return (
    <span
      className={`Tile ${submitResult}`}
    >
      { inputLetter }
    </span>
  );
}

export default Tile;
