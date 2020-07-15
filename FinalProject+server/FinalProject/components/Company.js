import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


import './Company.css';

class Company extends React.PureComponent {

  static propTypes = {
    aboutCompany: PropTypes.string.isRequired,
    imgAboutCompany: PropTypes.string.isRequired,
  };

  render() {

    return (
      <Fragment>
      <h1>О компании</h1>
      <div className='Company'>       
        <p className='AboutCompany'>{this.props.aboutCompany}</p>
        <img className='ImgAboutCompany'src={this.props.imgAboutCompany}></img>
      </div>
     </Fragment>
    )
    ;

  }

}

export default Company;
