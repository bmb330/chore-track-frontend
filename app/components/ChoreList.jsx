import React, { PropTypes } from 'react';
import Chore from './Chore';

export default ChoreList = ({ chores, onChoreClick }) => (
  <ul>
    {chores.map(chore =>
      <Chore
        key={chore.id}
        {...chore}
        onClick={() => onChoreClick(chore.id)}
      />
    )}
  </ul>
);

ChoreList.PropTypes = {
  chores: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string
  }).isRequired).isRequired,
  onChoreClick: PropTypes.func.isRequired
};
