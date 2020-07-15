import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';



import './Service.css';

class Service extends React.PureComponent {

  static propTypes = {    
    info:PropTypes.object.isRequired,    
  };
  
  render() {    

    return (
      <div className='ServiceContainer'>
        <img src={this.props.info.img} className='ServiceImg'></img>
        <NavLink to={"/service/"+this.props.info.id} className="ServiceName">{this.props.info.name}</NavLink>                
        <div className='ServiceSpecification'>
          {this.props.info.shortSpecification}
        </div>
      </div>
    )
    ;

  }

}

export default Service;
