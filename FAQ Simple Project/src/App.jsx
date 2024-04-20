import { useState } from "react";
import "./App.css";

const FaqAccordian = ({data})=>{
  return (
    <>
    <div className="faq-Accordion">
      <h2>FAQs</h2>
      {/* <FaqItem/> */}
      {data.map((item)=>(<FaqItem key={item.id} question={item.question} answer={item.answer}/>))}

    </div>
    </>
  )
};

const FaqItem = ({question,answer})=>{
  const [show,setShow] = useState(false);
  const toggleShow = ()=>{
    setShow(!show);
  }
  return (
    <>
    <div className={`faq-item ${show ? "active":""}`}>
      <div className="faq-item-header" onClick={toggleShow}>
          {question}
      </div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
          {answer}
        </div>

      </div>
    </div>
    </>
  )
};

const data = [
  {id:1,question:"What is ReactJs",answer:"User Interface FrameWork"},
  {id:2,question:"What is useState?",answer:"Use state is used to manage state and update state "},
  {id:3,question:"What is useEffect?",answer:"useEffect is used to render when the page is mounted once"}
];

function App(){
  return(
    <>
    <div className="App">
      <FaqAccordian data={data}/>
    </div>
    </>
  )
};

export default App;