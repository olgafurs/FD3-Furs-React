import React from 'react';
import SignUp from '../components/authentification/SignUp';

import './Page_SignUp.css';

class Page_SignUp extends React.PureComponent {
          
  render() {

    return (
      <div className='RegistrationContainer'>
      <h1>Регистрация пользователя</h1>
         <SignUp  />
      </div>
    );
    
  }

}
    
export default Page_SignUp;
    