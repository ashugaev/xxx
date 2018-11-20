import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Header from '../Header';
import reducers from '../../reducers/index';
import Body from '../Body';

const store = createStore(reducers, applyMiddleware(thunk));

function Main() {
  return (
    <Provider store={store}>
          <>
            <Header />
            <Body />
            <div>Основной компонент</div>
        </>
    </Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
