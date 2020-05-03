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
  }, 


  // getInitialState: function () {
  //   return {
  //     selectedItemId: 0,     
  //   };
  // },

  // inputText: function (EO) {    
  //   this.setState({ filtered: EO.target.value  }, this.processList);   
  // },


  // selectProductBlock: function(EO) {         
  //   // var selectedBlock = EO.target.parentNode;    
  //   // console.log(selectedBlock.className);
  //   // if (selectedBlock.className != 'Product2') return;    
  //   // selectedBlock.classList.add('Highlight'); 

  //   var selectedBlock = EO.target.getAttribute('itemId');
  //   this.setState({ selectedItemId: selectedBlock }, this.processList)
  // },  

  // processList: function(EO) {


  // },

  // deleteProduct: function(EO) {    
  //    EO.stopPropagation(); 
  //   var delBlock = EO.target.parentNode;//родитель EO.target, удаляемый блок
  //   var questionDelete = confirm("Вы хотите удалить товар?");
  //   if (questionDelete) {     
  //   delBlock.parentNode.removeChild(delBlock);    
  //   } 
  // },

  selectBlockProduct: function (EO) {
    this.props.cbSelected(this.props.code);
  },

  render: function() { 
    // console.log(this.props.class);
    return React.DOM.div({className: this.props.class, onClick: this.selectBlockProduct},
    React.DOM.img({className:'Photo', src:`${this.props.img}` ,}),
    React.DOM.p({className:'ProductName',  }, this.props.product),
    React.DOM.p({className:'Price',  }, this.props.price),         
    React.DOM.p({className:'Count', }, `В наличии ${this.props.count} букета(ов)` ),
    React.DOM.button({className:'', }, `Удалить` ),
   );
  
  },

});