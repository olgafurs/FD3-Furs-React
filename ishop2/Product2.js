var Product2 = React.createClass({

  displayName: 'Product2',
  
  propTypes: { 
    code: React.PropTypes.number.isRequired, 
    product: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired,
    img: React.PropTypes.string.isRequired,    
    class: React.PropTypes.string.isRequired, 
    cbSelected: React.PropTypes.func.isRequired, 
    cbDelete: React.PropTypes.func.isRequired,
  }, 

  selectBlockProduct: function (EO) {
    this.props.cbSelected(this.props.code);
  },

  deleteBlockProduct: function (EO) {
    this.props.cbDelete(this.props.code);
  },

  render: function() {     
    return React.DOM.div({className: this.props.class, onClick: this.selectBlockProduct},
    React.DOM.img({className:'Photo', src:`${this.props.img}` ,}),
    React.DOM.p({className:'ProductName',  }, this.props.product),
    React.DOM.p({className:'Price',  }, this.props.price),         
    React.DOM.p({className:'Count', }, `В наличии ${this.props.count} букета(ов)` ),
    React.DOM.button({className:'', onClick: this.deleteBlockProduct }, `Удалить` ),
   );  
  },
});