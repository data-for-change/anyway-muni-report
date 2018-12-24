import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
// import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';

// import firebase from 'firebase';

import { HomePage } from './pages';
import Layout from './Layout';
import styles from './styles';  

// const firebaseConfig = {}

// react-redux-firebase config
// const rrfConfig = {
  // userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }

// Initialize firebase instance
// firebase.initializeApp(firebaseConfig)

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  // reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  // reduxFirestore(firebase) // <- needed if using firestore
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  // firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Provider store={store}>
        <Layout classes={classes}>
          <HomePage/>
          </Layout>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));