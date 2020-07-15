import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from './PagesRouter';
import PagesLinks from './PagesLinks';

const divStyle = {  
  backgroundImage: 'url(../images/211.jpg)',
  backgroundRepeat:'repeat-y',
  backgroundSize: 'cover',
  // backgroundPosition: 'bottom',
  height: '100vh',
 
};


class MainPage extends React.PureComponent { 
    render() {    
     return (      
        <BrowserRouter>
         <div style={divStyle}>
         <PagesLinks />
         <PagesRouter />
         </div>
        </BrowserRouter>      
     );
  }
}


export default MainPage
