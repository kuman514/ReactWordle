import { useSelector } from 'react-redux';

import Alert from './Alert';
import AlternativeAlert from './AlternativeAlert';

function AlertIndicator() {
  /*
    State of AlertIndicator
      - showAlert: boolean from store -> alertMessage === ''
      - alternative: boolean from store -> alternativeAlert
  */

  const showAlertSelector = (state) => {
    return (state.alertMessage !== '');
  };
  const showAlert = useSelector(showAlertSelector);

  const alternativeSelector = (state) => {
    return state.alternativeAlert;
  };
  const alternative = useSelector(alternativeSelector);

  if (!showAlert) {
    return null;
  }

  if (alternative) {
    return (
      <AlternativeAlert />
    );
  } else {
    return (
      <Alert />
    );
  }
}

export default AlertIndicator;
