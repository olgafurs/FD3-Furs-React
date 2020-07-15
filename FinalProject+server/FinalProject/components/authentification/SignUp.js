import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

import './SignUp.css';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="SignUpContainer">
        <form className="white" onSubmit={this.handleSubmit}>                     
        <p className='InputTitle'>Ваш email</p>
        <input type="email" id='email' onChange={this.handleChange} />         
          
        <p className='InputTitle'>Пароль</p>
        <input type="password" id='password' onChange={this.handleChange} />         

        <p className='InputTitle'>Ваше имя</p>
        <input type="text" id='firstName' onChange={this.handleChange} />         
         
        <p className='InputTitle'>Ваша Фамилия</p>
        <input type="text" id='lastName' onChange={this.handleChange} />
         
        <div className="">
            <button className="InputSubmit">Зарегистрироваться</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)