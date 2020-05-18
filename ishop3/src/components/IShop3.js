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
    selectedItemId: null,
    items: this.props.products,
    workMode:this.props.startWorkMode, //1 - просмотр карточки. 2 - создание нового товара. 3 - редакирование товара.
    editProd:0,
    cardWasChanged:false,
    stBtnDelete:false,
    stBtnEdit:false,
    stBtnNewProd:false
  } 

  selectProduct = (sel) => { 
    if(this.state.cardWasChanged ==false && this.state.workMode != 2 ) {  
    this.setState({ selectedItemId: sel })
    this.setState({ workMode: 1 })
    }
  } 

  deleteProduct = (del) => {   
    if(this.state.workMode != 2 && this.state.workMode != 3 ){    
    var questionDelete = confirm("Вы хотите удалить товар?");
    if (questionDelete) {     
       var filteredItems = this.state.items.filter(s => s.code != del);
       this.setState({ items: filteredItems });
    }
   }else{
    this.setState({ stBtnDelete: true})
  }   
  }

  createNewProduct = () => {
    this.setState( {stBtnNewProd: true, workMode:2} );       
  }

  saveNewProduct =(productName, price, count, urlPhoto)=> {
      var newProd = {
        productName: productName,
        price: +price,
        urlPhoto:urlPhoto,
        count:+count,
        code: this.state.items.length
      };
     
      var addNewItem = this.state.items.concat(newProd);     
       this.setState({ items: addNewItem, workMode:1, cardWasChanged:false, stBtnNewProd: false, stBtnDelete:false, stBtnEdit:false });  
  }

  saveChanges =(code, productName, price, count, urlPhoto)=> {   
    this.state.items.map( v => {      
      if (v.code == code){
        v.productName = productName;
        v.price = +price;
        v.count = +count;
        v.urlPhoto = urlPhoto;
      }      
  })    
    this.setState({ items: this.state.items, workMode:1, cardWasChanged:false, stBtnNewProd: false, stBtnDelete:false, stBtnEdit:false });
  }

  editeProduct = (editeProdCode) => { 
    this.setState({ stBtnDelete:true, stBtnNewProd: true })
    if(this.state.cardWasChanged ==false && this.state.workMode != 2){  
    this.setState( {workMode:3, editProd:editeProdCode, selectedItemId:editeProdCode } );
    }        
  }

  wasChanged = () => {    
    this.setState( {cardWasChanged: true, stBtnEdit:true } );    
  }

  cansel = () => {
    this.setState( {workMode:4, cardWasChanged:false, stBtnNewProd: false, stBtnDelete:false, stBtnEdit:false,} );    
  }

  render() { 
    var cardProduct ;
    var itemId = this.state.selectedItemId;    

    if( this.state.workMode == 2) {      
      cardProduct = <NewAndEditProduct key={this.state.items.length} code={this.state.items.length} product='newProd' price={0} count={0} img="newProd"
       workMode={this.state.workMode} cbSave={this.saveNewProduct} cbCansel={this.cansel} cbWasChanged={this.wasChanged} />
    } else {
      cardProduct = null;
    }
   
    var productsArr=this.state.items.map( v => {      
     if (itemId == v.code && (this.state.workMode ==1) ) { 
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
          stBtnDelete={this.state.stBtnDelete}
          stBtnEdit={this.state.stBtnEdit}
       />      

       
      )
    } else if(itemId == v.code && (this.state.workMode ==3)) {
      this.state.items.map( v => {      
        if (this.state.editProd == v.code && itemId == v.code){          
          cardProduct = <NewAndEditProduct key={v.code} code={v.code} product={v.productName} price={v.price} count={v.count} img={v.urlPhoto}
           workMode={this.state.workMode} cbSave={this.saveChanges} cbCansel={this.cansel} cbWasChanged={this.wasChanged}/>
           
        }      
    });
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
          stBtnDelete={this.state.stBtnDelete}
          stBtnEdit={this.state.stBtnEdit}
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
          stBtnDelete={this.state.stBtnDelete}
          stBtnEdit={this.state.stBtnEdit}
        /> 
      );
    }    
       
  });
    return (
      <div className='IShop'> 
        <div className= 'nameIShop'> {this.props.name} </div>
        <div className= 'productsArr'> {productsArr} </div>
        <button className='ButtonNewProd' onClick = {this.createNewProduct} disabled={this.state.stBtnNewProd} >Создать новый продукт</button>
        <div> {cardProduct} </div>
      </div>
    );
  }

};

export default IShop3;