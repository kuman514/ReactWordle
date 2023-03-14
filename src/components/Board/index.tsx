import React from 'react';

import Line from '^/components/Line';

const tryIndexes = [0, 1, 2, 3, 4, 5];

function Board() {
  return (
    <div className="Board">
      <div className="Lines">
        {
          tryIndexes.map((index) => (
            <Line
              key={`try_${index}`}
              lineNo={index}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Board;
