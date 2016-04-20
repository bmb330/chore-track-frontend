import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import { APP_NAME } from '../constants';

export default () => (
  <AppBar
    title={APP_NAME}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

