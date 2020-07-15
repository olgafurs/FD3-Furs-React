import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Videos from '../components/Videos';

import appData from '../appData';

class Page_Videos extends React.PureComponent {
          
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <Videos 
      videos={appData.videoArr}        
      />
        
     
    );
    
  }

}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Page_Videos)
    