import React from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux'
import { createOrder } from '../store/actions/orderActions'

import appData from '../appData';


import './Order.css';

class Order extends React.PureComponent {

  state={
    name:'',
    lastname:'',
    tel: '',
    email:'',
    service:'',
    sent:false,
    disabled:true,
    _isMounted: false,

}

  componentDidMount() {
    this.setState({_isMounted: true});
  }

  componentWillUnmount() {
    this.setState({_isMounted: false});
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleChangeSelect = (e) => {
    console.log(e.target.value);
    this.setState({      
      service: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log( this.state);
    
    e.preventDefault();
    let data = {
      name:this.state.name,
      lastname:this.state.lastname,
      tel:this.state.tel,
      email:this.state.email,
      service:this.state.service
    }
    
    axios.post('/api',data)
    .then(res=>{
      
      this.setState({
        sent:true,
      },this.resetForm())
    })
    .catch(()=>{
      console.log('message not send');
      
    })

    this.props.createOrder(data);
  }

  resetForm=()=>{
    this.setState({
      name:'',
      lastname:'',
      tel: '',
      email:'',
      service:'',
      validMessageName:'',
      validMessageLastName:'',
      validMessageTel:'',
      validMessageEmail:'',
      validMessageService:'',
     
    })
  
    setTimeout(()=>{
      this.setState({
        sent:false,
      })
    },5000)
  }

  validationInput = () => {    

    (this.state.name == "")?(
      this.setState({validMessageName: "*Пожалуйста, введите свое имя. ", disabled: true})):(
        this.setState({validMessageName: "", disabled: false}));

    ((this.state.lastname == "") )?(
      this.setState({validMessageLastName: "*Пожалуйста, введите свою фамилию.", disabled: true})):(
        this.setState({validMessageLastName:"", disabled: false}));

    ((this.state.tel == "") )?(
      this.setState({validMessageTel: "*Пожалуйста, введите свой номер телефона.", disabled: true})):(
        this.setState({validMessageTel:"", disabled: false}));
    
    ((this.state.email == "") )?(
      this.setState({validMessageEmail: "*Пожалуйста, введите адрес электронной почты.", disabled: true})):(
        this.setState({validMessageEmail:"",disabled: false}));

    ((this.state.service == "") )?(
      this.setState({validMessageService: "*Пожалуйста, выберите услугу", disabled: true})):(
        this.setState({validMessageService: "", disabled: false}));

  //  ((this.state.validMessageName !== "")||(this.state.validMessageLastName !== "")|| (this.state.validMessageTel !== "")||(this.state.validMessageEmail !== ""))?
  //     this.setState({disabled: true}): this.setState({disabled: false});
  
  }

  
  
  
  render() {  
    
    let services=appData.servicesArr.map( service =>
      <option key={service.id} value={service.name}>{service.name}</option> 
    );

    const { profile } = this.props;
    return (
      <div className='Order'>

        {!this.state.sent ? 
        <form onSubmit={this.handleSubmit}>
          
          <p className='OrderTitle'>Ваше имя</p>
          <input className='OrderInput' type='text' id='name' value={this.state.name} onChange={this.handleChange} onBlur={this.validationInput}></input>
          <p className='ValidMessage'>{this.state.validMessageName}</p>
          
          <p className='OrderTitle'>Ваша фамилия</p>
          <input className='OrderInput' type='text' id='lastname' value={this.state.lastname} onChange={this.handleChange} onBlur={this.validationInput}></input>
          <p className='ValidMessage'>{this.state.validMessageLastName}</p>
          
          <p className='OrderTitle'>Ваш номер телефона</p>
          <input className='OrderInput' type='tel' id='tel' value={this.state.tel} onChange={this.handleChange} onBlur={this.validationInput}></input>
          <p className='ValidMessage'>{this.state.validMessageTel}</p>
          
          <p className='OrderTitle'>Ваш email</p>
          <input className='OrderInput' type='email' id='email' value={this.state.email} onChange={this.handleChange} onBlur={this.validationInput}></input>
          <p className='ValidMessage'>{this.state.validMessageEmail}</p>

          <p className='OrderTitle'>Выберите услугу</p>
          <p><select className='OrderSelect' name="services" value={this.state.service} onChange={this.handleChangeSelect} onBlur={this.validationInput} >
          <option value="" disabled  hidden>Выберите из списка</option>
             {services}
          </select>
          </p> 
          <p className='ValidMessage'>{this.state.validMessageService}</p>         
          <div className="">
            <button className="OrderInputSubmit" disabled={this.state.disabled}>Отправить заявку</button>            
          </div>        
        
        </form>
        :
        <div className='SuccessfulnContainer'>
         Уважаемый(ая) {profile.initials}, ваша заявка принята! Спасибо, что выбрали нас
        </div>
        
        
        } 
      </div>
    )
    ;

  }

}

const mapStateToProps = (state) => {
  return {    
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createOrder: (order) => dispatch(createOrder(order))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Order)