import Line from './Line';

function Board() {
  return (
    <div
      className="Board"
    >
      <div className="Lines">
        {
          [0, 1, 2, 3, 4, 5].map((index) => {
            return (
              <Line
                key={`try_${index}`}
                lineNo={index}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Board;
