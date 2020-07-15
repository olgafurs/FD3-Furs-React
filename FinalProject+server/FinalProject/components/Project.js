import React from 'react';
import PropTypes from 'prop-types';

import './Project.css';

class Project extends React.PureComponent {

  static propTypes = {    
    info:PropTypes.object.isRequired,    
  };
  
  render() {    

    return (
      <div className='ProjectContainer'>
        <img src={this.props.info.img} className='ProjectImg'></img>
        <div className="ProjectName">{this.props.info.name}</div>                
        <div className='ProjectSpecification'>
          {this.props.info.specification}
        </div>
      </div>
    )
    ;

  }

}

export default Project;
