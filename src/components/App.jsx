import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainArea from './MainArea';
import Header from './Header';
import store from '../store';

const App = () => {
  return (
    <Provider store={createStore(store, applyMiddleware(thunk))}>
      <Header />
      <MainArea />
    </Provider>
  );
};

export default App;