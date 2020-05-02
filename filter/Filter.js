var Filter = React.createClass({

  displayName: 'Filter',

  propTypes: {
    list: React.PropTypes.array.isRequired,
  },

  getInitialState: function () {
    return {
      sortered: false,
      filtered: "",
      processStr: this.props.list,
    };
  },

  selectedSort: function (EO) {    
    this.setState( {sortered:EO.target.checked}, this.processList );    
  },

  inputText: function (EO) {    
    this.setState({ filtered: EO.target.value  }, this.processList);   
  },

  processList: function(){
    
    var res = this.props.list.slice();   

    if( this.state.filtered){
      res = res.filter(s => s.indexOf(this.state.filtered) > -1);
    }
    if( this.state.sortered){
      res.sort();      
    }

    this.setState({ processStr: res});
     
  },

  reset: function () {
    this.setState({ 
      sortered: false,
      filtered: "",
      processStr: this.props.list,      
    });  
  },  

  render: function () {

    var listArr_ = [];
    this.state.processStr.forEach(function (item, index) {
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
          checked: (this.state.sortered),
          onClick: (this.selectedSort),
        }),
        React.DOM.input({
          className: '',
          type: 'text',
          name: 'text',
          value: this.state.filtered,
          onChange: this.inputText,
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