var IShop2 = React.createClass({

  displayName: 'IShop2',

  getDefaultProps: function() {
    return { name: "Просто какой-то интернет магазин" }
  },

  propTypes: {
    name: React.PropTypes.string.isRequired,
    products: React.PropTypes.array.isRequired
  }, 

  render: function() {    

    var productsArr=this.props.products.map( v =>
      React.createElement(Product2, {key:v.code, product: v.productName, price:v.price,  count: v.count, img:v.urlPhoto } )
    );

    return React.DOM.div( {className:'IShop'}, 
      React.DOM.div( {className:'nameIShop'}, this.props.name ),
      React.DOM.div( {className:'productsArr'}, productsArr ),
    );
  },

});