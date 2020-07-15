export const createComment = (idVideo, comment) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('comments'+idVideo).add({
      ...comment,           
      userId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_COMMENT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_COMMENT_ERROR' }, err);
    });
  }
};