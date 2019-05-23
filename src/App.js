import React, { Component } from 'react';
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
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              render={withRoot(
                withStyles(styles)(routProps => <LoginPage {...routProps} />)
              )}
            />
            <Route
              exact
              path="/"
              render={withRoot(
                withStyles(styles)(routProps => (
                  <Layout classes={routProps.classes}>
                    <HomePage {...routProps} />
                  </Layout>
                ))
              )}
            />
            <Route exact path="/react-admin" component={ReactAdminTopLevel} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
