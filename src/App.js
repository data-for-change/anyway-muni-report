import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import { HomePage } from './pages';
import Layout from './Layout';
import styles from './styles';
import { ReactAdminTopLevel } from './react-admin/ReactAdmin';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/municipality-page"
            render={withRoot(
              withStyles(styles)(routProps => (
                <Layout classes={routProps.classes}>
                  <HomePage {...routProps} />
                </Layout>
              ))
            )}
          />
          <Route exact path="/" component={ReactAdminTopLevel} />
        </Switch>
      </Router>
    );
  }
}

const hotApp = hot(App);

export { hotApp as default };
