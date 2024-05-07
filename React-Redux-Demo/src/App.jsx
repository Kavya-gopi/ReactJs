import { useState } from 'react'
import CustomerAdd from './CustomerAdd'
import {Provider} from "react-redux";
import { store } from './Store';
import CustomerView from './CustomerView';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <div>
        <h1>React-Redux Example</h1>
        <CustomerAdd/> 
        <CustomerView/>       
      </div>

    </Provider>
      
     
    </>
  )
}

export default App
