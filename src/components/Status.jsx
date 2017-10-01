import React from 'react';
import PropTypes from 'prop-types';

function Status(props) {
  const { discovered, secret } = props;

  return (
    <p>
      {discovered
        ? 'LOSER. Game Over! ' + secret
        : 'Not Guessed Yet...'
      }
    </p>
  );
}

Status.propTypes = {
  discovered: PropTypes.bool.isRequired,
  secret: PropTypes.string.isRequired
}

export default Status;
