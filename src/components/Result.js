function Result(props) {
  /*
    Props of Result
      - gameProcess: 'Playing' | 'Complete' | 'Failed'
      - tries: number
      - questionNumber: number
      - submitResults: string[][]
  */
  
  return (
    <div className={`Result ${(props.gameProcess === 'Playing' ? 'Hidden' : '')}`}>
      <div className="ResultContent">
        Result Content
      </div>
    </div>
  );
}

export default Result;
