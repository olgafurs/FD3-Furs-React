import authReducer from './authReducer'
import orderReducer from './orderReducer'
import commentReducer from './commentReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer, 
  order: orderReducer,
  comment: commentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer
