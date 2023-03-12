import React from 'react';

import useAppStore from '^/store';
import Alert from '^/components/Alert';
import AlternativeAlert from '^/components/AlternativeAlert';

function AlertIndicator() {
  const { alertMessage, alternativeAlert } = useAppStore();
  const showAlert = (alertMessage !== '');

  if (!showAlert) {
    return null;
  }

  return alternativeAlert ? (
    <AlternativeAlert />
  ) : (
    <Alert />
  );
}

export default AlertIndicator;
