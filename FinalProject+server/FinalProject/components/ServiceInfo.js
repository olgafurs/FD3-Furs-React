import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './ServiceInfo.css';

class ServiceInfo extends React.PureComponent {

  static propTypes = {    
    info:PropTypes.object.isRequired,    
  };
  render() {

    return (
      <div className='ServiceInfoContainer'> 
      <div className='ServiceInfoContainerData'>     
      <p className='ServiceInfoName'>{this.props.info.name}</p>
      <p className='ServiceInfoSpecification'>
        {this.props.info.specification}
      </p>
      <NavLink to="/order" ><input className='ServiceInfoOrder' type='button' value="Сделать заказ"/></NavLink> 
      </div>
      <img src={this.props.info.img} className='ServiceInfoImg'></img>    
    </div>
    )
    ;

  }

}

export default ServiceInfo;
