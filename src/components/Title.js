import { useSelector } from 'react-redux';

function Title() {
  /*
    State of Title
      - questionNumber: number from store -> questionNumber
  */

  const questionNumberSelector = (state) => {
    return state.questionNumber;
  };
  const questionNumber = useSelector(questionNumberSelector);

  return (
    <header>
      React Wordle { questionNumber }
    </header>
  );
}

export default Title;
