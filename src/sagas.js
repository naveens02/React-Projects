
import { call, put, takeLatest } from 'redux-saga/effects';
import { setProducts } from './actions';
import axios from 'axios';

function* fetchProducts() {
  try {
    const response = yield call(axios.get, 'https://fakestoreapi.com/products');
    yield put(setProducts(response.data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function* rootSaga() {
  yield takeLatest('FETCH_PRODUCTS', fetchProducts);
}

export default rootSaga;
