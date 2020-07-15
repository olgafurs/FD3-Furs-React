import React, { Fragment } from 'react';  
import { NavLink } from 'react-router-dom';
import './PagesLinks.css';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';

class PagesLinks extends React.Component {
          
  render() {

    const {auth, profile} = this.props;   
    const links = auth.uid ? 
    <Fragment>
      <a className="PageLinkReg" onClick={this.props.signOut}>Выход</a>
      <span className="Profile">{profile.initials}</span>
    </Fragment>
    : 
    <Fragment>
      <NavLink to="/signin" className='EnterBtn'>Войти</NavLink>
      <NavLink to="/signup" className="PageLinkReg" activeClassName="ActivePageLink">Регистрация</NavLink>
    </Fragment>

    return (
      
      <div className='MainMenu'>
        <NavLink to="/" exact className="PageLinkLogo" activeClassName="ActivePageLink">
          <img src="../images/logo.png"></img>
        </NavLink>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/company" className="PageLink" activeClassName="ActivePageLink">О компании</NavLink>
        {/* <NavLink to="/clients" className="PageLink" activeClassName="ActivePageLink">Клиенты</NavLink> */}
        <NavLink to="/services" className="PageLink" activeClassName="ActivePageLink">Услуги</NavLink>
        <NavLink to="/projects" className="PageLink" activeClassName="ActivePageLink">Проекты</NavLink>
        <NavLink to="/videos" className="PageLink" activeClassName="ActivePageLink">Видео</NavLink>
        {/* <NavLink to="/articles" className="PageLink" activeClassName="ActivePageLink">Статьи</NavLink> */}
        <NavLink to="/contacts" className="PageLink" activeClassName="ActivePageLink">Контакты</NavLink>      
        
        <div className="MainMenu_">
        <a className="Tel" href="tel:+375293310811">+375(29)-331-08-11</a>
        <a className="Tel" href="tel:+375295510811">+375(29)-551-08-11</a>
        {/* <NavLink to="/signin"><input className='EnterBtn' type='button' value="Войти"/></NavLink>
        <NavLink to="/signup" className="PageLinkReg" activeClassName="ActivePageLink">Регистрация</NavLink> */}
        {/* <NavLink to="/signout" className="PageLinkReg" activeClassName="ActivePageLink">Выйти</NavLink> */}
        {/* <a onClick={this.props.signOut}>Выйти</a> */}
        {links}
        </div>
        
      </div>
      
    );
    
  }

}

const mapStateToProps = (state) => { 
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    signOut: () => dispatch(signOut())
  }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(PagesLinks);
    