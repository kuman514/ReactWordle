import InputButton from './InputButton';
import SpecialInputButton from './SpecialInputButton';

function TouchInput() {
  const firstInputLine = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const secondInputLine = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const thirdInputLine = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  return (
    <div className="TouchInput">
      <div className="FirstInputLine">
        {
          firstInputLine.map((item) => {
            return (
              <InputButton
                key={`button-${item}`}
                letter={item}
              />
            );
          })
        }
      </div>
      <div className="SecondInputLine">
        {
          secondInputLine.map((item) => {
            return (
              <InputButton
                key={`button-${item}`}
                letter={item}
              />
            );
          })
        }
      </div>
      <div className="ThirdInputLine">
        <SpecialInputButton
          onTouchType="SUBMIT"
          textContent="CHECK"
        />
        {
          thirdInputLine.map((item) => {
            return (
              <InputButton
                key={`button-${item}`}
                letter={item}
              />
            );
          })
        }
        <SpecialInputButton
          onTouchType="ERASE"
          textContent="ERASE"
        />
      </div>
    </div>
  );
}

export default TouchInput;
