import React from 'react';

import { Alphabet, SpecialInputType } from '^/types';
import InputButton from '^/components/InputButton';
import SpecialInputButton from '^/components/SpecialInputButton';

const firstInputLine: Alphabet[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const secondInputLine: Alphabet[] = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const thirdInputLine: Alphabet[] = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

function TouchInput() {
  return (
    <div className="TouchInput">
      <div className="FirstInputLine">
        {
          firstInputLine.map((item) => (
            <InputButton
              key={`button-${item}`}
              letter={item}
            />
          ))
        }
      </div>
      <div className="SecondInputLine">
        {
          secondInputLine.map((item) => (
            <InputButton
              key={`button-${item}`}
              letter={item}
            />
          ))
        }
      </div>
      <div className="ThirdInputLine">
        <SpecialInputButton
          onTouchType={SpecialInputType.SUBMIT}
          textContent="CHECK"
        />
        {
          thirdInputLine.map((item) => (
            <InputButton
              key={`button-${item}`}
              letter={item}
            />
          ))
        }
        <SpecialInputButton
          onTouchType={SpecialInputType.ERASE}
          textContent="ERASE"
        />
      </div>
    </div>
  );
}

export default TouchInput;
