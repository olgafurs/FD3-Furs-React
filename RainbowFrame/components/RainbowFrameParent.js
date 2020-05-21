import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrameParent.css';

import RainbowFrame from './RainbowFrame';

class RainbowFrameParent  extends React.Component {  

  render() {
     let colors = ['#ff0000','#ffa500', '#ffff00','#66ff00', '#00BFFF', '#0000ff', '#800080']; 
    return (       
        <RainbowFrame colors={colors}>
          Hello!
        </RainbowFrame>  
      
    );   
    
  }

}


export default RainbowFrameParent;