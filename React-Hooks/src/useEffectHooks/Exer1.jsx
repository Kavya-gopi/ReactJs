import { useState, useEffect } from "react";

export const PostComment = () => {

    const [resource,setResource] = useState("Posts");
    const [list,setList] = useState([]);
    // 
    //fetch('https://jsonplaceholder.typicode.com/todos/1')
    //.then(response => response.json())
    //.then(json => console.log(json))
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(json => setList(json))
    },[resource])
  return (
    <>
      <div>
        <button onClick={()=>setResource("Posts")}>Posts</button>
        <button onClick={()=>setResource("Comments")}>Comments</button>
        <button onClick={()=>setResource("Users")}>Users</button>
        <p>{resource}</p>
        {list.map((item)=>{
            return <pre>{JSON.stringify(item)}</pre>
        })}
      </div>
    </>
  );
};
