import React from 'react';

import Services from '../components/Services';

import appData from '../appData';

class Page_Services extends React.PureComponent {
  
          
  render() {

   
    return (
      <Services 
      services={appData.servicesArr}        
      />        
      
    );
    
  }

}
    
export default Page_Services;
    