import React from 'react';

import ServiceInfo from '../components/ServiceInfo';

import appData from '../appData';

class Page_Service extends React.PureComponent {
          
  render() {
    
    let serviceId=parseInt(this.props.match.params.clid);
    let serviceData=appData.servicesArr.find( s => s.id==serviceId );    

    return (
      <ServiceInfo
        info={serviceData}
      />
    );
    
  }

}
    
export default Page_Service;
    