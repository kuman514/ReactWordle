import React from 'react';

import useAppStore from '^/store';
import { SpecialInputType } from '^/types';

interface Props {
  onTouchType: SpecialInputType;
  textContent: string;
}

function SpecialInputButton({
  onTouchType, textContent,
}: Props) {
  const { submit, erase } = useAppStore();
  return (
    <button
      className="SpecialInputButton"
      onClick={() => {
        switch (onTouchType) {
          case SpecialInputType.SUBMIT:
            submit();
            break;
          case SpecialInputType.ERASE:
            erase();
            break;
          default:
            break;
        }
      }}
    >
      { textContent }
    </button>
  );
}

export default SpecialInputButton;
