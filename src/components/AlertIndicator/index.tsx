import React from 'react';

import useAppStore from '^/store';
import Alert from '^/components/Alert';

function AlertIndicator() {
  const { alertMessage, recentAlertDate } = useAppStore();
  const showAlert = (alertMessage !== '');

  if (!showAlert) {
    return null;
  }

  return (
    <Alert
      message={alertMessage}
      recentDate={recentAlertDate}
    />
  );
}

export default AlertIndicator;
