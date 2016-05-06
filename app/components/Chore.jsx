import React, { PropTypes } from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import FlatButton from 'material-ui/lib/flat-button';
import Avatar from 'material-ui/lib/avatar';
import { colors } from '../constants';

const Chore = ({ onChoreClick, chore }) => (
  <Card
    style={{
      margin: '2rem'
    }}
  >
    <CardHeader
      title={chore.name}
    >
      <Avatar style={{float: 'right'}} backgroundColor={colors.accent1Color} color={colors.primary1Color}>D</Avatar>
    </CardHeader>
    <CardText>
      {chore.description ? chore.description : 'Add Details'}
    </CardText>
    <CardActions>
      <div
        style={{
          textAlign: 'right'
        }}
      >
        <FlatButton label="Complete" onClick={onChoreClick} />
      </div>
    </CardActions>
  </Card>
);

Chore.propTypes = {
  onChoreClick: PropTypes.func.isRequired,
  chore: PropTypes.object.isRequired
};

export default Chore;
