import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './Page_Successful.css';



class Page_Successful extends React.PureComponent {
          
  render() {
    const { profile } = this.props;
    
    return (
     <div className='SuccessfulnContainer'>
     Уважаемый(ая) {profile.initials}, ваша заявка принята! Спасибо, что выбрали нас
     </div>
        
     
    );
    
  }

}

const mapStateToProps = (state) => {
  return {
    
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Page_Successful)
    