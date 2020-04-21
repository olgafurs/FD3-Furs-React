var IShop = React.createClass({

  displayName: 'IShop',

  getDefaultProps: function() {
    return { name: "Просто какой-то интернет магазин" }
  },

  render: function() {

    var productsArr=[];

    this.props.products.forEach(function(item){
      var product = item;
      var productCode=        
        React.DOM.div({key:product.code, className:'Product'},
          React.DOM.img({className:'Photo', src:`${product.urlPhoto}`}),
          React.DOM.p({className:'ProductName'}, product.productName),
          React.DOM.p({className:'Price'}, product.price),         
          React.DOM.p({className:'Count'}, `В наличии ${product.count} букета(ов)` ),
        );
        productsArr.push(productCode);
    });

    return React.DOM.div( {className:'IShop'}, 
      React.DOM.div( {className:'nameIShop'}, this.props.name ),
      React.DOM.div( {className:'productsArr'}, productsArr ),
    );
  },

});