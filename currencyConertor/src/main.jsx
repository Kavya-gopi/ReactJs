import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import DigitalClock from './DigitalClock/DigitalClock.jsx'
import { PasswordGenerator } from './PasswordGeneratorApp/PassWordGenerator.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DigitalClock></DigitalClock> */}
     <PasswordGenerator/>
  </React.StrictMode>,
)
