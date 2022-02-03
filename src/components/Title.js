function Title(props) {
  /*
    Props of Title
      - questionNumber: number
  */

  return (
    <header>
      React Wordle { props.questionNumber }
    </header>
  );
}

export default Title;
