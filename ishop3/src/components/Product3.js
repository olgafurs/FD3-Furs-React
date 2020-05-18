import React from 'react';
import PropTypes from 'prop-types';

import './Product3.css';

class Product3 extends React.Component { 
  
  static propTypes = { 
    code: PropTypes.number.isRequired, 
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,    
    class: PropTypes.string.isRequired, 
    cbSelected: PropTypes.func.isRequired, 
    cbDelete: PropTypes.func.isRequired,
    cbEdite: PropTypes.func.isRequired,
    stBtnDelete: PropTypes.bool.isRequired,
    stBtnEdit:PropTypes.bool.isRequired,
  }; 

  // state = {
  //   stBtnDelete: false,
  //   stBtnEdit:false,
  // }

  selectBlockProduct = (EO) => {
    this.props.cbSelected(this.props.code);
  }

  deleteBlockProduct = (EO) => {
    this.props.cbDelete(this.props.code);
    EO.stopPropagation();
  }

  editBlockProduct = (EO) => {    
    this.props.cbEdite(this.props.code);
    EO.stopPropagation();
  }

  render() {     
    return (
      <div className={this.props.class} onClick={this.selectBlockProduct}>
        <img className='Photo' src= {this.props.img} />
        <p className='ProductName'>{this.props.product}</p>
        <p className='Price'>{this.props.price} руб.</p>
        <p className='Count'>В наличии {this.props.count} букета(ов)</p>
        <button className='Button' onClick={this.deleteBlockProduct} disabled={this.props.stBtnDelete}>Удалить</button>
        <button className='Button' onClick={this.editBlockProduct} disabled={this.props.stBtnEdit}>Редактировать</button>
    </div>
    
    );  
  }

}


export default Product3;