import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserDetails from './components/UserDetails.jsx'
import { Provider } from 'react-redux'
import { store } from './Store.js'
// import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
    <UserDetails/>
    </Provider>
    
  </React.StrictMode>,
)
