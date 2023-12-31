import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css'
import './index.css'
import './App.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from './Store.jsx';


// const store = createStore()
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>

)
