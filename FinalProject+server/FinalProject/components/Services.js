import React from 'react';
import PropTypes from 'prop-types';

import Service from './Service';

import './Services.css';
import './Service.css';

class Services extends React.PureComponent {

  static propTypes = {
    
    services:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        shortSpecification:PropTypes.string.isRequired,
        specification: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
    ),
  };
  
  render() {

    var serviceCode=this.props.services.map( service =>
      <Service key={service.id} info={service}  />
    );

    return (
      <div className='Services'>
        <h1>Услуги нашей компании</h1>
        <div className='ServicesContainer'>
          {serviceCode}
        </div>
      </div>
    )
    ;

  }

}

export default Services;
