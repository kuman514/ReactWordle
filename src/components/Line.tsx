import React from 'react';

import Tile from '^/components/Tile';

const columnIndexes = [0, 1, 2, 3, 4];

interface Props {
  lineNo: number;
}

function Line({ lineNo }: Props) {
  return (
    <div className="Line">
      {
        columnIndexes.map((index) => (
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
