import { useSelector } from 'react-redux';

function AlternativeAlert() {
  /*
    State of AlternativeAlert
      - message: string from store -> alertMessage
  */

  const messageSelector = (state) => {
    return state.alertMessage;
  };
  const message = useSelector(messageSelector);

  return (
    <div className="Alert">
      <div className="AlertContent">
        { message }
      </div>
    </div>
  );
}

export default AlternativeAlert;
