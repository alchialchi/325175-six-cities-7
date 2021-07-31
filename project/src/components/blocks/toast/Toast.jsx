import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { TOAST_MESSAGES, DEFAULT_TIMEOUT } from '../../../const';

function Toast({ message = TOAST_MESSAGES.DEFAULT }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, DEFAULT_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            backgroundColor: 'rgb(210, 50, 50)',
            color: 'white',
            fontSize: '22px',
            zIndex: 1000,
          }}
        >
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
};

export default Toast;
