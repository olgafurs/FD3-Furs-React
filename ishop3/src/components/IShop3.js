import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './IShop3.css';

import Product3 from './Product3';
import CardProduct from './CardProduct';
import NewAndEditProduct from './NewAndEditProduct';

class IShop3 extends React.Component {  

  static defaultProps = {
    name: "Просто какой-то интернет магазин"
  };

  static propTypes = {
    startWorkMode: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired    
  };

  state = {
    selectedItemId: 0,
    items: this.props.products,
    workMode:this.props.startWorkMode,
  } 

  selectProduct = (sel) => {    
    this.setState({ selectedItemId: sel })
    this.setState({ workMode: 1 })
  } 

  deleteProduct = (del) => {    
    var questionDelete = confirm("Вы хотите удалить товар?");
    if (questionDelete) {     
       var filteredItems = this.state.items.filter(s => s.code != del);
       this.setState({ items: filteredItems });
    }   
  }

  createNewProduct = () => {
    this.setState( {workMode:2} );
    // console.log( " createNewProduct " + this.state.workMode) 
  }

  editeProduct = (editeProdCode) => {   
    this.setState( {workMode:3});
    // console.log("Редактировать  " + this.state.workMode + editeProdCode)   
        
  }

  

  render() { 
    var cardProduct;
    var itemId = this.state.selectedItemId;


    if( this.state.workMode == 2) {      
      cardProduct = <NewAndEditProduct code={0} product='newProd' price='newProd' count={0} img="newProd" workMode={this.state.workMode}/>

    } else if (this.state.workMode == 3) {     


      // cardProduct = <NewAndEditProduct code={1} product='v' price='kk' count={4} img="vv" workMode={this.state.workMode}/>
    }
    
    
   
    var productsArr=this.state.items.map( v => {      
     if (itemId == v.code && this.state.workMode ==1) { 
       cardProduct = <CardProduct code={v.code} product={v.productName} price={v.price} count={v.count} img={v.urlPhoto}/>  
       return (
        
        <Product3 key={v.code} code={v.code} 
          product={v.productName} 
          price={v.price}
          count={v.count} 
          img={v.urlPhoto} 
          class='Product2_' 
          cbSelected={this.selectProduct} 
          cbDelete={this.deleteProduct}
          cbEdite={this.editeProduct}
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
          cbEdite={this.editeProduct}
        /> 
      );
    }    
       
  });

    return (
      <div className='IShop'> 
        <div className= 'nameIShop'> {this.props.name} </div>
        <div className= 'productsArr'> {productsArr} </div>
        <button className='ButtonNewProd' onClick = {this.createNewProduct}>Создать новый продукт</button>
        <div className= 'CardProduct'> {cardProduct} </div>
      </div>
    );
  }

};

export default IShop3;