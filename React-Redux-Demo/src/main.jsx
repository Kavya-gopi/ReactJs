import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserDetails from './components/UserDetails.jsx'
import { Provider } from 'react-redux'
// import { store } from './Store.js'
import { store } from './Store/Store.js'
// import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  
    {/* <Provider store={store}>
    <UserDetails/>
    </Provider> */}
    
  </React.StrictMode>,
)
