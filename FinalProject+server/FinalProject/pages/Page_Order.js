import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Order from '../components/Order';


// import appData from '../appData';
import './Page_Order.css';

class Page_Order extends React.PureComponent {
  
          
  render() {    
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className='OrderContainer'>
      <h1>Сделать заказ</h1>
      <Order/>
      </div>
    );
    
  }

}
    
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Page_Order)
    