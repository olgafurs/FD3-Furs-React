"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';

let store=createStore(rootReducer, 
  compose(
   applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
   reduxFirestore(fbConfig),
   reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: "users", attachAuthIsReady: true})
  )
)

store.firebaseAuthIsReady.then(() => {
ReactDOM.render(
  <Provider store={store}>
  <MainPage/>
  </Provider> 
, document.getElementById('container') );

})