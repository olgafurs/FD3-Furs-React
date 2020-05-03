var IShop2 = React.createClass({

  displayName: 'IShop2',

  getDefaultProps: function() {
    return { name: "Просто какой-то интернет магазин" }
  },

  propTypes: {
    name: React.PropTypes.string.isRequired,
    products: React.PropTypes.array.isRequired

    // products: React.PropTypes.arrayOf(
    //   React.PropTypes.shape({
    //     code: React.PropTypes.number.isRequired,
    //     count: React.PropTypes.number.isRequired,
    //     productName: React.PropTypes.string.isRequired,
    //     price: React.PropTypes.string.isRequired,
    //     urlPhoto: React.PropTypes.string.isRequired,
    //   })
    // )
  },
  
  getInitialState: function () {
    return {
      selectedItemId: 0,
      // class: "Product2",   
    };
  },

  selectProduct: function(sel) {    
    console.log(sel);
    this.setState({ selectedItemId: sel })
  }, 

  render: function() {    
    
    var itemId = this.state.selectedItemId;
       
    var productsArr=this.props.products.map( function(v) {      
     if (itemId == v.code) {      
      return React.createElement(Product2, {key:v.code, code:v.code, product: v.productName, 
        price:v.price,  count: v.count, img:v.urlPhoto, class: 'Product2_', cbSelected:this.selectProduct } );
    }else {
      return React.createElement(Product2, {key:v.code, code:v.code, product: v.productName, 
        price:v.price,  count: v.count, img:v.urlPhoto, class: 'Product2', cbSelected:this.selectProduct } );
    }    
       
  });

    return React.DOM.div( {className:'IShop'}, 
      React.DOM.div( {className:'nameIShop'}, this.props.name ),
      React.DOM.div( {className:'productsArr'}, productsArr ),
    );
  },

});