import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_About from './Page_About';
import Page_Company from './Page_Company';
// import Page_Clients from './Page_Clients';
// import Page_Client from './Page_Client';
import Page_Services from './Page_Services';
import Page_Service from './Page_Service';
import Page_Projects from './Page_Projects';
import Page_Videos from './Page_Videos';
import Page_Video from './Page_Video';
import Page_Articles from './Page_Articles';
import Page_Contacts from './Page_Contacts';
import Page_Order from './Page_Order';
import Page_SignUp from './Page_SignUp';
import Page_SignIn from './Page_SignIn';
import Page_Successful from './Page_Successful';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_About} />
        <Route path="/company" component={Page_Company} />
        {/* <Route path="/clients" component={Page_Clients} /> */}
        {/* <Route path="/client/:clid" component={Page_Client} /> */}
        <Route path="/services" component={Page_Services} />
        <Route path="/service/:clid" component={Page_Service} />
        <Route path="/projects" component={Page_Projects} />
        <Route path="/videos" component={Page_Videos} />
        <Route path="/video/:clid" component={Page_Video} />
        {/* <Route path="/articles" component={Page_Articles} /> */}
        <Route path="/contacts" component={Page_Contacts} />
        <Route path="/order" component={Page_Order} />
        <Route path="/signup" component={Page_SignUp} />
        <Route path="/signin" component={Page_SignIn}/>      
        <Route path="/successful" component={Page_Successful}/>

      </div>
    );
    
  }

}
    
export default PagesRouter;
    