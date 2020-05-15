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
  };

  state = {
    stProductName:"",
    stPrice: "",
    stCount:"",
    stImgUrl:""
  }

  changeInputValue= (EO) => {

    this.setState({stProductName:EO.target.value})
  }
  
  editProduct = () => {


  }
  
  saveNewProduct = () => {

  }

  cansel = () => {

  }
  

  render() {
    if ( this.props.workMode==3 ) {
    
    return (
       <div className='NewAndEditProduct'> 
        <h2>Редактирование данных продукта</h2> 
        <p>Id {this.props.code}</p>
        <span>Название</span> 
        <input type="text" defaultValue={this.props.product}/> 
        <span>Цена</span> 
        <input type="text" defaultValue={this.props.price}/>    
        <span>Количество</span> 
        <input type="text" defaultValue={this.props.count}/>
        <span>URL картинки</span> 
        <input type="text" defaultValue={this.props.img}/>
        <input type="button" onClick={this.editProduct} value="Сохранить"/>
        <input type="button" onClick={this.cansel} value="Отмена"/>    
       </div>
    );    
    } else {
      return (
        <div className='NewAndEditProduct'> 
         <h2>Создание нового продукта</h2> 
         <p><span>Id {this.props.code}</span> </p>
         <p>
         <span>Название</span> 
         <input type="text" value={this.state.stProductName} onChange={this.changeInputValue}/>
         </p>
         <p>
         <span>Цена</span> 
         <input type="text" value={this.state.stPrice} onChange={this.changeInputValue}/>
         </p>
         <p>
         <span>Количество</span> 
         <input type="text" value={this.state.stCount} onChange={this.changeInputValue}/>
         </p>
         <p>
         <span>URL картинки</span> 
         <input type="text" value={this.state.stImgUrl} onChange={this.changeInputValue}/>
         </p>
         <p>
         <input type="button" onClick={this.saveNewProduct} value="Добавить"/>
         <input type="button" onClick={this.cansel} value="Отмена"/>
         </p>
        </div>
     );    

    }
  }

}


export default NewAndEditProduct;