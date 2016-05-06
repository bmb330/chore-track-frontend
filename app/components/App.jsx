import React from 'react';
import SiteBar from './SiteBar';
import VisibleChoreList from '../containers/VisibleChoreList';
import LeftNave from 'material-ui/lib/left-nav';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import Theme from '../theme.js';

export default class App extends React.Component {
  getChildContext () {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme)
    };
  }

  render () {
    return (
      <div>
        <SiteBar />
        <VisibleChoreList />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};
