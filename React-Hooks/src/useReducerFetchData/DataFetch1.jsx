import { useReducer, useEffect } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  error: "",
  post: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "Fetch_Success":
      return {loading:false,post:action.payload,error:''};
    case "Fetch_Failure":
      return {loading:false,error:"Something Went Wrong",post:{}};
    default:
      return state;
  }
}

function DataFetch1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => {
        dispatch({ type: "Fetch_Success", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "Fetch_Failure" });
      });
  }, []);
  return (
    <>
      {state.loading ? "Loading..Please Wait..." : state.post.title}
      {state.error ? error : null}
    </>
  );
}

export default DataFetch1;
