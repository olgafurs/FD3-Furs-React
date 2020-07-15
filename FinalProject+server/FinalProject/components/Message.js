import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


import './Message.css';

class Message extends React.PureComponent {

  state={
    name:'',
    lastname:'',
    email:'',
    message:'',
    sent:false,
    buttonText: 'Send Message',

}

  handleChange = (e) => {
    this.setState({
    [e.target.id]: e.target.value
    })
  }



  formSubmit=(e)=>{
  e.preventDefault();
  
  let data = {
    name:this.state.name,
    lastname:this.state.lastname,
    email:this.state.email,
    message:this.state.message
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

  }
  resetForm=()=>{
    this.setState({
      name:'',
      lastname:'',
      message:'',
      email:'',
  
    })

    setTimeout(()=>{
      this.setState({
        sent:false,
        
      })
    },3000)
  }

  

  
  render() {    

    return (
      <div className='Message'>
        <form onSubmit={this.formSubmit}>  
          <p className='OrderTitle'>Ваше имя</p>
          <input className='OrderInput' type='text' value={this.state.name} id='name' onChange={this.handleChange}></input>           
          <p className='OrderTitle'>Ваша фамилия</p>
          <input className='OrderInput' type='text' value={this.state.lastname} id='lastname' onChange={this.handleChange}></input>          
          <p className='OrderTitle'>Ваш email</p>
          <input className='OrderInput' type='email' value={this.state.email} id='email' onChange={this.handleChange}></input>      
          <p className='OrderTitle'>Текст сообщения</p>
          <div className="">            
            <textarea className='OrderTextarea' name="message" value={this.state.message} id='message' onChange={this.handleChange}></textarea>
          </div>      
             {this.state.sent? <div >Сообщение отправлено</div> : null}           
          <div className="">
            <button className="OrderInputSubmit">Отправить</button>            
          </div>   
      
        </form>
      </div>
    )
    ;

  }

}


export default Message
