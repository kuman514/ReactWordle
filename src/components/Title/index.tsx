import React from 'react';

import useAppStore from '^/store';

function Title() {
  const { questionNumber } = useAppStore();

  return (
    <header>
      React Wordle { questionNumber }
    </header>
  );
}

export default Title;
