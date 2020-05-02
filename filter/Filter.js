var Filter = React.createClass({

  displayName: 'Filter',

  propTypes: {
    list: React.PropTypes.array.isRequired,
  },

  getInitialState: function () {
    return {
      list_: this.props.list,        
      checked: false,     
    };
  },


  selectedSort: function () {   
    if (this.state.checked == false){
    this.setState({ 
      checked: true,     
      list_:  this.state.list_.sort(),      
    });
    
  } else {
    this.setState({ 
      checked: false,     
      list_:  this.props.list,
      
    });   
  };  
  },

  reset: function () {
    this.setState({ 
      checked: false,     
      list_:  this.props.list,      
    });
          
    document.querySelectorAll('ul li').forEach(item => {     
        item.style.display = "block";     
    })

   },

   inputText: function (EO) {    
    let filter = EO.target.value.toLowerCase();    
    let filterElements = document.querySelectorAll('ul li');    
    filterElements.forEach(item => {
      if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    })
   },


  render: function () {

    var listArr_ = [];

    this.state.list_.forEach(function (item, index) {
      var item = item;
      var productCode =
        React.DOM.li({
            key: index,
            className: 'Listli'
          },
          item
        );
      listArr_.push(productCode);
    });

    return React.DOM.div({
        className: 'Filter'
      },
      React.DOM.form({
          className: ''
        },
        React.DOM.input({
          className: '',
          type: 'checkbox',
          name: 'checkbox',
          checked: (this.state.checked),
          onChange: (this.selectedSort),
        }),
        React.DOM.input({
          className: '',
          type: 'text',
          name: 'text',
          onKeyUp: this.inputText,
        }, ),
        React.DOM.input({
          className: '',
          type: 'reset',
          name: 'reset',
          onClick: this.reset,
        }, ),
        React.DOM.ul({
            className: 'List'
          },
          listArr_
        ),
      ),
    );
  },

});