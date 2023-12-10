import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setProducts } from '../actions';
import ProductList from './ProductList';

const App = ({ products, setProducts }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setProducts([]);
      setIsLoading(false); 
    }, 2000); 
  }, [setProducts]);

  return (
    <div className="App">
      <h2>Product Lists</h2>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <ProductList list={products} />
      )}
    </div>
  );
};

const mapDispatchToProps = {
  setProducts,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
