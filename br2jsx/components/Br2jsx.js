import React from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';



class Br2jsx  extends React.Component {

  static propTypes = {   
    text: PropTypes.string.isRequired,     
  };

  render() {
    let re = /<br\s?\/?>/;
    let arr =this.props.text.split(re);
    // let arrLeng= arr.length*2-2;
    // for(var i = 0; i<arrLeng; i++){
    //  arr.splice(++i, 0, <br/>)
    // }

    let arr2 = [];
    for(var i = 0; i<arr.length; i++){
      if(i != (arr.length-1) ){
       arr2.push(arr[i]);
       arr2.push(<br key={i}/>);
      } else {
       arr2.push(arr[i]);
      }
    }
    

  return <div className ="Br2jsx" >{arr2}</div>

}
}


export default Br2jsx;

