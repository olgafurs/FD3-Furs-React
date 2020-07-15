import React, { Fragment } from 'react';

import Contacts from '../components/Contacts';
import Message from '../components/Message';

import './Page_Contacts.css';

class Page_Contacts extends React.PureComponent {
          
  render() {

    return (
      <Fragment>
      <h1>Наши контакты</h1>
      <div className="ContactsContainer">
        
        <Contacts/>
        <Message/>
      </div>
      </Fragment>
      
    );
    
  }

}
    
export default Page_Contacts;
    