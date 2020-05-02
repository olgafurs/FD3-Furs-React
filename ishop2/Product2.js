var Product2 = React.createClass({

  displayName: 'Product2',

  propTypes: {    
    product: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired,
    img: React.PropTypes.string.isRequired,    
  }, 

  selectProductBlock: function(EO) {         
    var selectedBlock = EO.target.parentNode;    
    console.log(selectedBlock.className);
    if (selectedBlock.className != 'Product2') return;

  //   document.getElementsByClassName('Product2').map( v => {
  //     if (v.classList.contains('highlight')){
  //     v.classList.remove('highlight')
  //    }
  //  }
  // );
    
    selectedBlock.classList.add('Highlight'); 
   
  },  

  deleteProduct: function(EO) {    
     EO.stopPropagation(); 
    var delBlock = EO.target.parentNode;//родитель EO.target, удаляемый блок
    var questionDelete = confirm("Вы хотите удалить товар?");
    if (questionDelete) {     
    delBlock.parentNode.removeChild(delBlock);    
    } 
  },

  render: function() { 
    return React.DOM.div({className:'Product2', onClick: this.selectProductBlock},
    React.DOM.img({className:'Photo', src:`${this.props.img}` ,}),
    React.DOM.p({className:'ProductName',  }, this.props.product),
    React.DOM.p({className:'Price',  }, this.props.price),         
    React.DOM.p({className:'Count', }, `В наличии ${this.props.count} букета(ов)` ),
    React.DOM.button({className:'', onClick: this.deleteProduct }, `Удалить` ),
   );
  
  },

});