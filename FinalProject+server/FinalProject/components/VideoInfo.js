import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import './VideoInfo.css';

class VideoInfo extends React.PureComponent {

  static propTypes = {    
    info:PropTypes.object.isRequired,    
  };
  render() {

    return (
      <div className='VideoInfoContainer'>
      
      <h1>{this.props.info.name}</h1>      
      <iframe className='Iframe' src={this.props.info.src} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe> 
     
     
      </div>
    )
    ;

  }

}

export default VideoInfo;
