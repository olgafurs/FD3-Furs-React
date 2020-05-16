import React from 'react';
import PropTypes from 'prop-types';

import './NewAndEditProduct.css';

class NewAndEditProduct extends React.Component {  
  
  static propTypes = { 
    code: PropTypes.number.isRequired, 
    product: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,    
    workMode: PropTypes.number.isRequired,
    cbSave: PropTypes.func.isRequired,
    cbCansel: PropTypes.func.isRequired,
  };

  state = {
    stProductName:"",
    stPrice: "",
    stCount:"",
    stImgUrl:"img/rose.jpg",
    stProductNameEdit:this.props.product,
    stPriceEdit: this.props.price,
    stCountEdit:this.props.count,
    stImgUrlEdit:this.props.img,
    disabledSaveNewProd:true,
    disabledSaveEdit:false,    
  }

  changeInputProductName= (EO) => { 
    if(this.props.workMode==2){
      this.setState({stProductName:EO.target.value})  
    } else {
      this.setState({stProductNameEdit:EO.target.value}) 
    }   
      
  }
  changeInputPrice= (EO) => {
    if(this.props.workMode==2){
    this.setState({stPrice:EO.target.value})
    } else{
      this.setState({stPriceEdit:EO.target.value}) 
    }   
  }
  changeInputCount= (EO) => {
    if(this.props.workMode==2){
    this.setState({stCount:EO.target.value})
    } else{
      this.setState({stCountEdit:EO.target.value}) 
    }  
  }
  changeInputImgUrl= (EO) => {
    if(this.props.workMode==2){
    this.setState({stImgUrl:EO.target.value})
    } else {
    this.setState({stImgUrlEdit:EO.target.value}) 
    }  
  }

  
  saveEditProduct = () => {
    if(this.state.stProductNameEdit == "" || this.state.stPriceEdit == ""  || this.state.stCountEdit == ""  || this.state.stImgUrlEdit == "" ) {
      console.log ( "пусто");
          } else {
          this.props.cbSave(this.props.code, this.state.stProductNameEdit, this.state.stPriceEdit, this.state.stCountEdit, this.state.stImgUrlEdit)
          }

  }
  
  saveNewProduct = () => {
    if(this.state.stProductName == "" || this.state.stPrice == ""  || this.state.stCount == ""  || this.state.stImgUrl == "" ) {
      this.setState({disabledSaveNewProd:true}) 
    } else {       
      this.props.cbSave(this.state.stProductName, this.state.stPrice, this.state.stCount, this.state.stImgUrl)
    }
  }
  cansel = () => {
    this.props.cbCansel();
  }  

  render() {
    if ( this.props.workMode==3 ) {
     console.log(this.state.stProductNameEdit  + "     " + this.props.product);
    return (
       <div className='NewAndEditProduct'> 
        <h2>Редактирование данных товара</h2> 
        <p><span>Id {this.props.code}</span></p>
        <p>
        <span>Название</span> 
        <input type="text" value={this.state.stProductNameEdit} onChange={this.changeInputProductName}/>
        </p>
        <p>
        <span>Цена</span> 
        <input type="text" value={this.state.stPriceEdit} onChange={this.changeInputPrice}/> 
        </p>
        <p>
        <span>Количество</span> 
        <input type="text" value={this.state.stCountEdit} onChange={this.changeInputCount}/>
        </p>
        <p>
        <span>URL картинки</span> 
        <input type="text" value={this.state.stImgUrlEdit} onChange={this.changeInputImgUrl}/>
        </p>
        <p className="blockBtnNewEdit">
        <input type="button" className="BtnNewEdit" onClick={this.saveEditProduct} disabled={this.state.disabledSaveEdit} value="Сохранить"/>
        <input type="button" className="BtnNewEdit" onClick={this.cansel} value="Отмена"/>
        </p>            
       </div>
    );    
    } else {
      return (
        <div className='NewAndEditProduct'> 
         <h2>Создание нового товара</h2> 
         <p><span>Id {this.props.code}</span> </p>
         <p>
         <span>Название</span> 
         <input type="text" value={this.state.stProductName} onChange={this.changeInputProductName}/>
         </p>
         <p>
         <span>Цена</span> 
         <input type="text" value={this.state.stPrice} onChange={this.changeInputPrice}/>
         </p>
         <p>
         <span>Количество</span> 
         <input type="text" value={this.state.stCount} onChange={this.changeInputCount}/>
         </p>
         <p>
         <span>URL картинки</span> 
         <input type="text" value={this.state.stImgUrl} onChange={this.changeInputImgUrl}/>
         </p>
         <p className="blockBtnNewEdit">
         <input type="button" className="BtnNewEdit" onClick={this.saveNewProduct} disabled={this.state.disabledSaveNewProd} value="Добавить"/>
         <input type="button" className="BtnNewEdit" onClick={this.cansel} value="Отмена"/>
         </p>
        </div>
     );    

    }
  }

}


export default NewAndEditProduct;