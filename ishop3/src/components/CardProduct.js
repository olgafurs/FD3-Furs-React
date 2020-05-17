import React from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

class CardProduct extends React.Component {  
  
  static propTypes = { 
    code: PropTypes.number.isRequired, 
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,    
    // workMode: PropTypes.number.isRequired,
  };   

  render() { 
    return (
      <div className='CardProduct'>
        <h2>Данные товара</h2>        
        <p className='ProductName'>{this.props.product}</p>
        <p className='Price'>{this.props.price} руб.</p>
        <p className='Count'>В наличии {this.props.count} букета(ов)</p>
        <p className='Count'>Картинка {this.props.img}</p>       
      </div>
    );    
    
  }

}


export default CardProduct;