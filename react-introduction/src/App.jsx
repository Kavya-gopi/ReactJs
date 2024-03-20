
import './App.css'
import { ChildComponent } from './components/ChildComponent'
import { Car } from './components/ChildrenandProps/Car'
import { Scooter } from './components/ChildrenandProps/Scooter'
import { Header } from './components/Header'
import { Student } from './components/props'

function App() {
  

  return (
    <>
      <Student name="Kavya" age={21} isMarried={false}></Student>
      <Student name="Keerthi" age={23} isMarried={false}></Student>
      <ChildComponent>
        <p>This is test1</p>
        <p>This is test2</p>
      </ChildComponent>
      <Car Model="Activa 6G" Brand="Hyundai" price={200000}></Car>
      <Scooter>
        <p>Name : "Hero Honda"</p>
        <p>Brand : "fasino"</p>
      </Scooter>
    </>
  )
}

export default App
