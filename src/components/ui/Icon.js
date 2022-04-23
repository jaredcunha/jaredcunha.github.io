import * as React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon }) => {
  return (
    <svg className="icon" aria-hidden="true" role="img">
      <use xlinkHref={`/sprite.svg#${icon}`} />
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
