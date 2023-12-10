
const initialState = {
    products: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.products,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  