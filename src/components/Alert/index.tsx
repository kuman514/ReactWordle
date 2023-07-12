import React, { useEffect, useState } from 'react';

interface Props {
  message: string;
  recentDate: Date;
}

function Alert({ message, recentDate }: Props) {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    setIsShowing(false);
  }, [message, recentDate]);

  useEffect(() => {
    if (isShowing) {
      return;
    }

    setIsShowing(true);
  }, [isShowing]);

  return isShowing ? (
    <div className="Alert">
      <div className="AlertContent">
        { message }
      </div>
    </div>
  ) : null;
}

export default Alert;
