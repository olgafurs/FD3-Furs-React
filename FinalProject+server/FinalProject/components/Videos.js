import React from 'react';
import PropTypes from 'prop-types';

import Video from './Video';

import './Videos.css';


class Videos extends React.PureComponent {

  static propTypes = {
    
    videos:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
    ),
  };
  
  render() {

    var videosCode=this.props.videos.map( video =>
      <Video key={video.id} info={video}  />
    );

    
    return (
      <div className=''>
        <h1>Видео по теме АСУ ТП</h1>
        <div className='VideosContainer'>
          {videosCode}
        </div>
      </div>
    )
    ;

  }

}


export default Videos