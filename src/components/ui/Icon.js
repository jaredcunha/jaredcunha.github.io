import * as React from 'react';

const Icon = ({ icon }) => {
  return (
    <svg className="icon" aria-hidden="true" role="img">
      <use xlinkHref={`/sprite.svg#${icon}`} />
    </svg>
  );
};

export default Icon;
