import React from 'react';
import Tile from './Tile';

interface Props {
  lineNo: number;
}

function Line({ lineNo }: Props) {
  return (
    <div className="Line">
      {
        [0, 1, 2, 3, 4].map((index) => (
          <Tile
            key={`input_${lineNo}-${index}`}
            lineNo={lineNo}
            colNo={index}
          />
        ))
      }
    </div>
  );
}

export default Line;
