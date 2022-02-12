import Tile from './Tile';

function Line(props) {
  /*
    Props of Line
      - lineNo: number
  */

  return (
    <div className="Line">
      {
        [0, 1, 2, 3, 4].map((index) => {
          return (
            <Tile
              key={`input_${props.lineNo}-${index}`}
              lineNo={props.lineNo}
              colNo={index}
            />
          );
        })
      }
    </div>
  );
}

export default Line;
