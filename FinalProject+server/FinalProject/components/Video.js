import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';



import './Video.css';

class Video extends React.PureComponent {

  static propTypes = {    
    info:PropTypes.object.isRequired,    
  };
  
  render() {    

    return (
      <div className='VideoContainer'>
        <p className='VideoContainerP'>{this.props.info.name}</p>
        <NavLink to={"/video/"+this.props.info.id} className="">Смотреть</NavLink>
                
        
      </div>
    )
    ;

  }

}

export default Video;
