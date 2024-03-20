export const Header=()=>{
    const items=["Item1","Item2","Item3"];
    //conditional Rendering
    const isLoggedIn = true;
    const greeting = isLoggedIn?'Welcome to this page':'Please Log in';
    return(<>
      <h1>Started Learning React Js</h1>
      <p style={{color:'red'}}>Learn More Be smart</p>
      <p>25+45={25+45}</p>
      <ul>
        {items.map((item,index)=><li key={index}>{item}</li>)}
      </ul>
      <p>{greeting}</p>
    </>)
}