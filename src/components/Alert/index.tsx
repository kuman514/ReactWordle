import React, { useEffect, useState } from 'react';
import useAppStore from '^/store';

function Alert() {
  const { alertMessage, recentAlertDate } = useAppStore();
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const isShowAlert = isActivated && (alertMessage !== '');

  useEffect(() => {
    setIsActivated(false);
  }, [alertMessage, recentAlertDate]);

  useEffect(() => {
    if (isActivated) {
      return;
    }

    setIsActivated(true);
  }, [isActivated]);

  return isShowAlert ? (
    <div className="Alert">
      <div className="AlertContent">
        { alertMessage }
      </div>
    </div>
  ) : null;
}

export default Alert;
