import React from 'react';
import { NavLink } from 'react-router-dom';

import './Page_About.css';

class Page_About extends React.PureComponent {
          
  render() {

    return (
      <div className='MainPage'>
        <div>        
        <h1 className='MainTitle'>Автоматизированные системы управления технологическими процессами</h1>
        <NavLink to="/order" ><input className='OrderBtn' type='button' value="Сделать заказ"/></NavLink> 
        </div>
        
          <img className='MainPageImg' src="../images/1.jpg"></img>
             
      </div>
    );
    
  }

}
    
export default Page_About;
    