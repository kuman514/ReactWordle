function Line(props) {
  /*
    Props of Line
      - try: number
      - submitted: boolean
      - input: string (length up to 5)
      - submitResult: stirng[] (length exactly 5)
  */

  return (
    <div className="Line">
      {
        [0, 1, 2, 3, 4].map((index) => {
          const item = props.input[index] ? props.input[index] : '';
          return (
            <span
              key={`input_${props.try}-${index}`}
              className={`${props.submitted ? props.submitResult[index] : ''}`}
            >
              { item }
            </span>
          );
        })
      }
    </div>
  );
}

export default Line;
