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
    editProd:0,
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

  saveNewProduct =(productName, price, count, urlPhoto)=> {
      var newProd = {
        productName: productName,
        price: price,
        urlPhoto:urlPhoto,
        count:+count,
        code: 10

      };
      console.log(newProd);
      var addNewItem = this.state.items.concat(newProd);
      console.log(this.state.items);
       this.setState({ items: addNewItem });
       console.log(this.state.items);
  
  }

  saveChanges =(code, productName, price, count, urlPhoto)=> {
    console.log(code, productName, price, count, urlPhoto);
    this.state.items.map( v => {      
      if (v.code == code){
        v.productName = productName;
        v.price = price;
        v.count = +count;
        v.urlPhoto = urlPhoto;
      }      
  })    
    this.setState({ items: this.state.items });
  }

  editeProduct = (editeProdCode) => {   
    this.setState( {workMode:3, editProd:editeProdCode} );        
  }

  cansel = () => {
    this.setState( {workMode:4} ); 
    console.log(this.state.workMode) ;
  }

  render() { 
    var cardProduct ;
    var itemId = this.state.selectedItemId;


    if( this.state.workMode == 2) {      
      cardProduct = <NewAndEditProduct code={0} product='newProd' price='newProd' count={0} img="newProd"
       workMode={this.state.workMode} cbSave={this.saveNewProduct} cbCansel={this.cansel} />

    } else if (this.state.workMode == 3) {     
      this.state.items.map( v => {      
        if (this.state.editProd == v.code){
          console.log("Редактировать другой товар"+this.state.editProd + "  "+ v.productName);
          cardProduct = <NewAndEditProduct code={v.code} product={v.productName} price={v.price} count={v.count} img={v.urlPhoto}
           workMode={this.state.workMode} cbSave={this.saveChanges} cbCansel={this.cansel}/> 
        }      
    })} else {
      cardProduct = null;
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
        <div> {cardProduct} </div>
      </div>
    );
  }

};

export default IShop3;