import React from 'react';

import Company from '../components/Company';

import appData from '../appData';

class Page_Company extends React.PureComponent {
          
  render() {

    return (
      <Company 
        aboutCompany={appData.aboutCompany}
        imgAboutCompany={appData.imgAboutCompany}
      />
    );
    
  }

}
    
export default Page_Company;
    