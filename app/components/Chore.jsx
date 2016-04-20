import React, { PropTypes } from 'react';

export default Chore = ({ onClick, chore }) => {
  <li
    onClick={onClick}
  >
    {chore.name}
  </li>;
};

Chore.propTypes = {
  onClick: PropTypes.func.isRequired,
  chore: PropTypes.object.isRequired
};
