import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Table } from './Http/Table.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Table></Table>
  </React.StrictMode>,
)
