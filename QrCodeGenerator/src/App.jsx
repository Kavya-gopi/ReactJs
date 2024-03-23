import { useState } from 'react'
import { QrCodeGen } from './QrCode/QrCodeGenerator'
import { Cart } from './useStateDemos/Cart'
import { UserData } from './useStateDemos/formsSample'
import { Users } from './useStateDemos/formsObjectstate'
import { UserDatas } from './forms/UserDetails'
import { AdviceApp } from './AdviceApiProject/AdviceApp'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <QrCodeGen></QrCodeGen> */}
      {/* <Cart></Cart> */}
      {/* <UserData></UserData> */}
      {/* <Users></Users> */}
      {/* <UserDatas></UserDatas> */}
      <AdviceApp/>

    </>
  )
}

export default App
