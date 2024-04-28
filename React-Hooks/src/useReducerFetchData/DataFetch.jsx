import React,{useState,useEffect} from "react";
import axios from "axios";
function DataFetch(){
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const [post,setPost]=useState({});

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response=>{
            setLoading(false);
            setError('');
            setPost(response.data);
        })
        .catch(error=>{
            setLoading(false);
            setError("Oops!! Something Went Wrong");
            setPost({});
        })

    },[])
    return(
        <>
        <div>
          {loading ? "loading....Please Wait": post.title}
          {error ? error : null}
        </div>
        </>
    )
}

export default DataFetch;