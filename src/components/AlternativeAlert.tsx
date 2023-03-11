import React from 'react';

import useAppStore from '^/store';

function AlternativeAlert() {
  const { alertMessage } = useAppStore();
  return (
    <div className="Alert">
      <div className="AlertContent">
        { alertMessage }
      </div>
    </div>
  );
}

export default AlternativeAlert;
