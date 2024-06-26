import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UseMemo1Demo from './useMemoDemos/UseMemo1Demo.jsx'
import UseCallBackDemo from './useCallbackHook/UseCallBackDemo.jsx'
import Counter from './useMemoDemos/Counter.jsx'
import InputForm from './CustomHooks/InputForm.jsx'
import CustomInputForm from './CustomHooks/CustomInputForm.jsx'
// import CounterOne from './CustomHooks/CounterOne.jsx'
import DocTitle from './CustomHooks/DocTitle.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseMemo1Demo/> */}
    {/* <UseCallBackDemo/> */}
    {/* <Counter/> */}
    <InputForm/>
    <CustomInputForm/>
    {/* <CounterOne/> */}
    <DocTitle/>
  </React.StrictMode>,
)
