import React from 'react';
import SignIn from '../components/authentification/SignIn';

import './Page_SignIn.css';

class Page_SignIn extends React.PureComponent {
          
  render() {

    return (
      <div className='RegistrationContainer'>
      <h1>Вход на сайт</h1>
         <SignIn  />
      </div>
    );
    
  }

}
    
export default Page_SignIn;
    