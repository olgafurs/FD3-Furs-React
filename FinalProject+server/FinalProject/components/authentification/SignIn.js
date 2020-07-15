import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import './SignIn.css';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {

    const {authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="SignInContainer">
        <form className="" onSubmit={this.handleSubmit}>         
         
          <p className='InputTitle'>Ваш email</p>
          <input className='Input' type="email" id='email' onChange={this.handleChange} />        
         
          <p className='InputTitle'>Пароль</p>
          <input className='Input' type="password" id='password' onChange={this.handleChange} />
         
          <div className="">
            <button className="InputSubmit">Войти</button>
            <div>
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)