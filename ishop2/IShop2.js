var IShop2 = React.createClass({

  displayName: 'IShop2',

  getDefaultProps: function() {
    return { name: "Просто какой-то интернет магазин" }
  },

  propTypes: {
    name: React.PropTypes.string.isRequired,
    products: React.PropTypes.array.isRequired    
  },
  
  getInitialState: function () {
    return {
      selectedItemId: 0,
      items: this.props.products,       
    };
  },

  selectProduct: function(sel) {    
    this.setState({ selectedItemId: sel })
  }, 

  deleteProduct: function(del) {    
    var questionDelete = confirm("Вы хотите удалить товар?");
    if (questionDelete) {     
       var filteredItems = this.state.items.filter(s => s.code != del);
       this.setState({ items: filteredItems });
    }   
  },

  render: function() {    
    
    var itemId = this.state.selectedItemId;

    var productsArr=this.state.items.map( v => {      
     if (itemId == v.code) {      
      return React.createElement(Product2, {key:v.code, code:v.code, product: v.productName, 
        price:v.price,  count: v.count, img:v.urlPhoto, class: 'Product2_', cbSelected:this.selectProduct, cbDelete: this.deleteProduct } );
    } else {
      return React.createElement(Product2, {key:v.code, code:v.code, product: v.productName, 
        price:v.price,  count: v.count, img:v.urlPhoto, class: 'Product2', cbSelected:this.selectProduct, cbDelete: this.deleteProduct } );
    }    
       
  });

    return React.DOM.div( {className:'IShop'}, 
      React.DOM.div( {className:'nameIShop'}, this.props.name ),
      React.DOM.div( {className:'productsArr'}, productsArr ),
    );
  },

});