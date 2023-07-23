import React, { useState, useEffect } from 'react';

const Notification = ( message, closeCondition ) => {
  const [isShown, setIsShown] = useState(false);
  
  useEffect(() => {
    setIsShown(true);
    const timeout = setTimeout(() => setIsShown(false), 5000); // 5 seconds timeout, adjust as needed

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (closeCondition) {
      setIsShown(false);
    }
  }, [closeCondition]);

  return (
    <>
      {isShown && (
        <div className="notification-container">
          <div className="notification">
            <span>{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
