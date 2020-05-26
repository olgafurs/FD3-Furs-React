import React from 'react';
import {Fragment} from 'react';

import './RainbowFrameParentHOC.css';

import DoubleButton from './DoubleButton';
import {withRainbowFrame} from './withRainbowFrame';

class RainbowFrameParentHOC  extends React.Component {  

  render() {
     let colors = ['#ff0000','#ffa500', '#ffff00','#66ff00', '#00BFFF', '#0000ff', '#800080']; 
     let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);
    return (
     <Fragment>
       <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>
       <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>
     </Fragment>

    );   
    
  }

}


export default RainbowFrameParentHOC;