import { useReducer, useState } from "react";

const initialState=[];

function reducer(state,action){
    switch(action.type){
       case "addUser":
        return [...state,{id:state.length+1,UserName:action.nameValue,UserEmail:action.emailValue}];
       case "deleteUser":
        return state.filter(user=>user.id!==action.payload);
       default:
        return state;
    }
}

function TodoListAddBtn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state,dispatch] = useReducer(reducer,initialState);

  function handleSubmit(){
     dispatch({type:"addUser",nameValue:name,emailValue:email});
     setEmail("");
     setName("");
  }

  function handleDelete(id){
    dispatch({type:"deleteUser",payload:id});

  }

  return (
    <>
      <div>
        <label htmlFor="name">Enter your Name </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="email">Enter Your Email </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br></br>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            <ul>
                {state.map((user)=>(
                    <li key={user.id}>{user.UserName}  {user.UserEmail}
                    <button onClick={()=>handleDelete(user.id)}>Delete</button>
                    </li>

                ))}
            </ul>
        </div>
      </div>
    </>
  );
}

export default TodoListAddBtn;
