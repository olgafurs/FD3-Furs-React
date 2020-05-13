import React from 'react';
import PropTypes from 'prop-types';

import './IShop3.css';

import Product3 from './Product3';


class IShop3 extends React.Component {


  // displayName: 'IShop2',

  // getDefaultProps: function() {
  //   return { name: "Просто какой-то интернет магазин" }
  // },
  static propTypes = {
    name: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired    
  };

  state = {
    selectedItemId: 0,
    items: this.props.products,
  } 

  selectProduct = (sel) => {    
    this.setState({ selectedItemId: sel })
  } 

  deleteProduct = (del) => {    
    var questionDelete = confirm("Вы хотите удалить товар?");
    if (questionDelete) {     
       var filteredItems = this.state.items.filter(s => s.code != del);
       this.setState({ items: filteredItems });
    }   
  }

  render() {    
    
    var itemId = this.state.selectedItemId;

    var productsArr=this.state.items.map( v => {      
     if (itemId == v.code) {      
      return (
        <Product3 key={v.code} code={v.code} 
          product={v.productName} 
          price={v.price}
          count={v.count} 
          img={v.urlPhoto} 
          class='Product2_' 
          cbSelected={this.selectProduct} 
          cbDelete={this.deleteProduct} 
       />
      )
    } else {
      return (
        <Product3 key={v.code} code={v.code} 
          product={v.productName} 
          price={v.price}
          count={v.count} 
          img={v.urlPhoto} 
          class='Product2'
          cbSelected={this.selectProduct}
          cbDelete={this.deleteProduct}
        /> 
      );
    }    
       
  });

    return (
      <div className='IShop'> 
        <div className= 'nameIShop'> {this.props.name} </div>
        <div className= 'productsArr'> {productsArr} </div>
      </div>
    );
  }

};

export default IShop3;