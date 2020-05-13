"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop3 from './components/IShop3';

let nameIShop = 'Цветочный интернет-магазин MyFavouriteFlowers.by';
let productList = require('./products.json');

ReactDOM.render( 
  <IShop3 
   name = {nameIShop}
   products = {productList}
  />, document.getElementById('container')
);


