const firstInputLine = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const secondInputLine = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const thirdInputLine = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

function TouchInput(props) {
  /*
    Props of TouchInput
      - result: {
          'a' ~ 'z': 'Untried' | 'Correct' | 'Existing' | 'Never'
        }
      - onInput: Function (letter: string)
      - onErase: Function (void)
      - onSubmit: Function (void)
  */
 
  const onTouchButton = (buttonName) => {
    switch (buttonName) {
      case 'ERASE':
        props.onErase();
        break;
      case 'SUBMIT':
        props.onSubmit();
        break;
      default:
        props.onInput(buttonName[0]);
        break;
    }
  };

  return (
    <div className="TouchInput">
      <div className="FirstInputLine">
        {
          firstInputLine.map((item) => {
            return (
              <button
                key={`button-${item}`}
                className={props.result[item]}
                onClick={() => {
                  onTouchButton(item);
                }}
              >
                { item }
              </button>
            );
          })
        }
      </div>
      <div className="SecondInputLine">
        {
          secondInputLine.map((item) => {
            return (
              <button
                key={`button-${item}`}
                className={props.result[item]}
                onClick={() => {
                  onTouchButton(item);
                }}
              >
                { item }
              </button>
            );
          })
        }
      </div>
      <div className="ThirdInputLine">
        <button
          className="BigButton"
          onClick={() => {
            onTouchButton('SUBMIT');
          }}
        >
          SUBMIT
        </button>
        {
          thirdInputLine.map((item) => {
            return (
              <button
                key={`button-${item}`}
                className={props.result[item]}
                onClick={() => {
                  onTouchButton(item);
                }}
              >
                { item }
              </button>
            );
          })
        }
        <button
          className="BigButton"
          onClick={() => {
            onTouchButton('ERASE');
          }}
        >
          ERASE
        </button>
      </div>
    </div>
  );
}

export default TouchInput;
