import React from 'react';

import MobileClients from '../components/MobileClients';

import appData from '../appData';


import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Page_Clients extends React.PureComponent {
          
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <MobileClients
        name={appData.companyName}
        clients={appData.clientsArr}
      />
    );
    
  }

}
    
// export default Page_Company;

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    users: state.firestore.ordered.users,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' }
  ])
)(Page_Clients)
    