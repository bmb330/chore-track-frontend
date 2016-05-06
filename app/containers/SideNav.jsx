import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render () {
    return ();
  }
};
