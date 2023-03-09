import { useDispatch } from 'react-redux';

function SpecialInputButton(props) {
  /*
    Props of SpecialInputButton
      - onTouchType: string
      - textContent: string
  */

  const dispatch = useDispatch();

  return (
    <button
      className="SpecialInputButton"
      onClick={() => {
        dispatch({
          type: props.onTouchType
        });
      }}
    >
      { props.textContent }
    </button>
  );
}

export default SpecialInputButton;
