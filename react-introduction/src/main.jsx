import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LearnComponent from './components/ComponentsEx.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  
    <LearnComponent/>
  </React.StrictMode>
)
