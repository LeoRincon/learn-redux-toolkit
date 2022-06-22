import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
// import { Pokemon } from './Pokemon';
// import App from './App';
import { TodoApp } from './TodoApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <Pokemon /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
