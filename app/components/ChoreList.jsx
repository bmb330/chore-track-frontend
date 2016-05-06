import React, { PropTypes } from 'react';
import Chore from './Chore';
import TextField from 'material-ui/lib/text-field';

const ChoreList = ({ chores, onChoreClick, addChore }) => (
  <div
    style={{
      margin: '4rem',
      maxWidth: '32rem'
    }}
  >
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <TextField
        hintText="Add Chore"
        onEnterKeyDown={(e) => {addChore({name: e.target.value}); e.target.value='';} }
      />
    </div>
    {chores.map(chore =>
      <Chore
        key={chore.name}
        chore={chore}
        onChoreClick={() => onChoreClick(chore.id)}
      />
    )}
  </div>
);

ChoreList.defaultProps = {chores: [], categories: []};

export default ChoreList;
