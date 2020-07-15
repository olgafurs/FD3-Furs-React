import React, { Fragment } from 'react';

import VideoInfo from '../components/VideoInfo';
import Comment from '../components/Comment';

import appData from '../appData';

class Page_Video extends React.PureComponent {
  
          
  render() {

    let videoId=parseInt(this.props.match.params.clid);
    let videoData=appData.videoArr.find( v => v.id==videoId );
    
    return (
      
      <Fragment>
      <VideoInfo
        info={videoData}
      />
        
      <Comment idVideo={videoId}/>
      </Fragment>
    );
    
  }

}
    
export default Page_Video;
    