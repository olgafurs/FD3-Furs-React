const initState = {}

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ORDER_SUCCESS':
      console.log('create order success');
      return state;
    case 'CREATE_ORDER_ERROR':
      console.log('create order error');
      return state;
    default:
      return state;
  }
};

export default orderReducer;