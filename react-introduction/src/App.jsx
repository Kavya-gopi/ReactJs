
import './App.css'
import { ChildComponent } from './components/ChildComponent'
import { Car } from './components/ChildrenandProps/Car'
import { OneOfSample } from './components/ChildrenandProps/OneOfSample'
import { MultiTypeComponent } from './components/ChildrenandProps/OneOfType'
import { Scooter } from './components/ChildrenandProps/Scooter'
import { FunctionSample } from './components/ChildrenandProps/funcProps'
import { ArraysProps } from './components/ChildrenandProps/propsArray'
import { Header } from './components/Header'
import { Student } from './components/props'

function App() {
  const items = [
                 {id:1,itemName:"MakeUpKit"},
                 {id:2,itemName:"IronBox"},
                 {id:3,itemName:"Sarees"}
  ];
  const handleClickYes = ()=>{
    alert("Yes,Completed!!");
  }

  const handleClickNo = ()=>{
    alert("No,Not Completed Yet");
  }

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
      <ArraysProps items = {items}></ArraysProps>
      <OneOfSample color="blue"></OneOfSample>
      <MultiTypeComponent value="Hello World"></MultiTypeComponent>
      <MultiTypeComponent value={23}></MultiTypeComponent>
      <MultiTypeComponent value={true}></MultiTypeComponent>
      <FunctionSample handleClickYes={handleClickYes} handleClickNo={handleClickNo}></FunctionSample>
    </>
  )
}

export default App
