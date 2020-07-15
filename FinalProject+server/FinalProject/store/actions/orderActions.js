export const createOrder = (order) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('order').add({
      ...order,
      userFirstName: profile.firstName,
      userLastName: profile.lastName,     
      userId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_ORDER_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_ORDER_ERROR' }, err);
    });
  }
};