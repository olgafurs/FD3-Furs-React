import React from 'react';
import PropTypes from 'prop-types';

import './NewAndEditProduct.css';

class NewAndEditProduct extends React.Component {  
  
  static propTypes = { 
    code: PropTypes.number.isRequired, 
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,    
    workMode: PropTypes.number.isRequired,
    cbSave: PropTypes.func.isRequired,
    cbCansel: PropTypes.func.isRequired,
    cbWasChanged: PropTypes.func.isRequired,
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
    validMessageProductName:"",
    validMessagePrice:"",
    validMessageCount:"",
    validMessageImgUrl:"",
    cardWasChanged: false
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
    if(this.props.workMode==3){
    this.setState({stImgUrlEdit:EO.target.value})
    } else {
    this.setState({stImgUrl:EO.target.value}) 
    }  
  }

  cardWasChanged = () =>{
    this.props.cbWasChanged();
  }


  validationInput = () => {
    if(this.props.workMode==3){
      this.cardWasChanged();

    (this.state.stProductNameEdit == "")?(
      this.setState({validMessageProductName: "*Пожалуйста, заполните поле. Тип  данных - строка.", disabledSaveEdit: true })):(
        this.setState({validMessageProductName: "", disabledSaveEdit: false}));

    ((this.state.stPriceEdit == "") || (isNaN(this.state.stPriceEdit) === true) || (this.state.stPriceEdit<=0))?(
      this.setState({validMessagePrice: "*Пожалуйста, заполните поле правильно. Тип  данных - число больше нуля.", disabledSaveEdit: true})):(
        this.setState({validMessagePrice:""}));

    ((this.state.stCountEdit == "") || (isNaN (this.state.stCountEdit) === true) || (this.state.stCountEdit <= 0)|| (this.state.stCountEdit % 1 !== 0))?(
      this.setState({validMessageCount: "*Пожалуйста, заполните поле правильно. Тип  данных - целое число больше нуля.", disabledSaveEdit: true})):(
        this.setState({validMessageCount: ""}));

    (this.state.stImgUrlEdit == "")?(
      this.setState({validMessageImgUrl: "*Пожалуйста, заполните поле. Тип  данных - строка.", disabledSaveEdit: true})):(
       this.setState({validMessageImgUrl: ""}));
  
  
  
  } else {
    (this.state.stProductName == "")?(
      this.setState({validMessageProductName: "*Пожалуйста, заполните поле. Тип  данных - строка.", disabledSaveNewProd: true })):(
        this.setState({validMessageProductName: "", disabledSaveNewProd: false}));

    ((this.state.stPrice == "") || (isNaN(this.state.stPrice) === true) || (this.state.stPrice<=0))?(
      this.setState({validMessagePrice: "*Пожалуйста, заполните поле правильно. Тип  данных - число больше нуля.", disabledSaveNewProd: true})):(
        this.setState({validMessagePrice:""}));

    ((this.state.stCount == "") || (isNaN (this.state.stCount) === true) || (this.state.stCount <= 0)|| (this.state.stCount % 1 !== 0))?(
      this.setState({validMessageCount: "*Пожалуйста, заполните поле правильно. Тип  данных - целое число больше нуля.", disabledSaveNewProd: true})):(
        this.setState({validMessageCount: ""}));

    (this.state.stImgUrl == "")?(
      this.setState({validMessageImgUrl: "*Пожалуйста, заполните поле. Тип  данных - строка.", disabledSaveNewProd: true})):(
        this.setState({validMessageImgUrl: ""}));
  }

}

  
  saveEditProduct = () => {    
    this.props.cbSave(this.props.code, this.state.stProductNameEdit, this.state.stPriceEdit, this.state.stCountEdit, this.state.stImgUrlEdit)
  }
  
  saveNewProduct = () => {         
    this.props.cbSave(this.state.stProductName, this.state.stPrice, this.state.stCount, this.state.stImgUrl)
  }


  cansel = () => {
    this.props.cbCansel();
  }  

  render() {
    if ( this.props.workMode==3 ) {
      
    return (
       <div className='NewAndEditProduct'> 
        <h2>Редактирование данных товара</h2> 
        <p><span className='LableInput'>Id {this.props.code}</span></p>
        <p>
        <span className='LableInput'>Название</span> 
        <input type="text" value={this.state.stProductNameEdit} onChange={this.changeInputProductName} onBlur={this.validationInput}/>
        <span className='ValidMessage'>{this.state.validMessageProductName}</span>
        </p>
        <p>
        <span className='LableInput'>Цена</span> 
        <input type="text" value={this.state.stPriceEdit} onChange={this.changeInputPrice} onBlur={this.validationInput}/> 
        <span className='ValidMessage'>{this.state.validMessagePrice}</span>
        </p>
        <p>
        <span className='LableInput'>Количество</span> 
        <input type="text" value={this.state.stCountEdit} onChange={this.changeInputCount} onBlur={this.validationInput}/>
        <span className='ValidMessage'>{this.state.validMessageCount}</span>
        </p>
        <p>
        <span className='LableInput'>URL картинки</span> 
        <input type="text" value={this.state.stImgUrlEdit} onChange={this.changeInputImgUrl} onBlur={this.validationInput}/>
        <span className='ValidMessage'>{this.state.validMessageImgUrl}</span>
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
         <p><span className='LableInput'>Id {this.props.code}</span> </p>
         <p>
         <span className='LableInput'>Название</span> 
         <input type="text" value={this.state.stProductName} onChange={this.changeInputProductName} onBlur={this.validationInput}/>
         <span className='ValidMessage'>{this.state.validMessageProductName}</span>
         </p>
         <p>
         <span className='LableInput'>Цена</span> 
         <input type="text" value={this.state.stPrice} onChange={this.changeInputPrice} onBlur={this.validationInput}/>
         <span className='ValidMessage'>{this.state.validMessagePrice}</span>
         </p>
         <p>
         <span className='LableInput'>Количество</span> 
         <input type="text" value={this.state.stCount} onChange={this.changeInputCount} onBlur={this.validationInput}/>
         <span className='ValidMessage'>{this.state.validMessageCount}</span>
         </p>
         <p>
         <span className='LableInput'>URL картинки</span> 
         <input type="text" value={this.state.stImgUrl} onChange={this.changeInputImgUrl} onBlur={this.validationInput}/>
         <span className='ValidMessage'>{this.state.validMessageImgUrl}</span>
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