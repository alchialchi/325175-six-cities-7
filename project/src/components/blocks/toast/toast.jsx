import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_TIMEOUT, AlertMessage } from '../../../const';

function Toast({ message = AlertMessage.DEFAULT }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
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
            backgroundColor: '#4481c3',
            color: 'white',
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
