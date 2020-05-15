import React from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

class CardProduct extends React.Component {  
  
  static propTypes = { 
    code: PropTypes.number.isRequired, 
    product: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,    
    // workMode: PropTypes.number.isRequired,
  };   

  render() { 
    return (
      <div className='CardProduct'>        
        <p className='ProductName'>{this.props.product}</p>
        <p className='Price'>{this.props.price}</p>
        <p className='Count'>В наличии {this.props.count} букета(ов)</p>
        <p className='Count'>Картинка {this.props.img}</p>       
      </div>
    );    
    
  }

}


export default CardProduct;