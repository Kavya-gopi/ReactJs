import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { About } from './components/About'
import { Service } from './components/Service'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { User } from './components/User'
import { OldBooks } from './components/OldBooks'
import { NewBooks } from './components/NewBooks'
import { Login } from './components/LoginPage'
import { DashBoard } from './components/DashBoard'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/service'>Service</Link></li>
      <li><Link to='/user/1'>User1</Link></li>
      <li><Link to='/books/oldBooks'>OldBooks</Link></li>
      <li><Link to='/books/newBooks'>NewBooks</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/dashBoard'>DashBoard</Link></li>
    </ul>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/user/:id' element={<User/>}></Route>
      <Route path='/books'>
        <Route path='oldBooks' element={<OldBooks/>}></Route>
        <Route path='newBooks' element={<NewBooks/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashBoard' element={<DashBoard/>}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
