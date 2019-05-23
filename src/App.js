import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
// import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';

// import firebase from 'firebase';

import { HomePage, LoginPage } from './pages';
import Layout from './Layout';
import styles from './styles';
import { ReactAdminTopLevel } from './react-admin/ReactAdmin';

// const firebaseConfig = {}

// react-redux-firebase config
// const rrfConfig = {
// userProfile: 'users',
// useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }

// Initialize firebase instance
// firebase.initializeApp(firebaseConfig)

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose()(createStore);
// reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
// reduxFirestore(firebase) // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
  // firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              render={routProps => (
                <LoginPage {...routProps} classes={classes} />
              )}
            />
            <Route
              exact
              path="/"
              render={routProps => (
                <Layout classes={classes}>
                  <HomePage {...routProps} classes={classes} />
                </Layout>
              )}
            />
            <Route
              exact
              path="/react-admin"
              render={routProps => <ReactAdminTopLevel />}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
