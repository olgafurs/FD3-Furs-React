import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame  extends React.Component {  
  
  static propTypes = { 
    colors: PropTypes.array.isRequired,
  }; 
  
  drawFrame = (col) => {    
    if (col ==-1){ 
       return <p className="Children">{this.props.children}</p>;
    } else {
       return <div style={{border: "solid 7px" + this.props.colors[col], padding:"10px"}}>{this.drawFrame(col - 1)}</div>;
    }    
  }
  

  render() {          
      return (          
           this.drawFrame(this.props.colors.length-1)        
      );   
    
  }

}


export default RainbowFrame;