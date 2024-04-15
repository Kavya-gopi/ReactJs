import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { TableTodo } from './tableuseState/tabletodo.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <TableTodo></TableTodo>
  </React.StrictMode>,
)
