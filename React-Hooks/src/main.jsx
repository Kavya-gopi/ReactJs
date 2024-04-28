import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PostComment } from "./useEffectHooks/Exer1.jsx";
import { HookCounter1 } from "./useStateHooksDemo/HookCounter1.jsx";
import { HookCounter2 } from "./useStateHooksDemo/HookCounter2.jsx";
import { HookObject } from "./useStateHooksDemo/HookObject.jsx";
import { TextLength } from "./useStateHooksDemo/TextLength.jsx";
import ClassCompoEffect from "./useEffectHooks/ClassCompoEffect.jsx";
import { HookComponent } from "./useEffectHooks/HookComponent.jsx";
import Mouseover from "./useEffectHooks/Mouseover.jsx";
import { MouseMoveFunc } from "./useEffectHooks/MouseMoveFunc.jsx";
import UseEffectDemo1 from "./useEffectHooks/UseEffectDemo1.jsx";
import DataFetching from "./useEffectHooks/DataFetching.jsx";
import DataFetching1 from "./useEffectHooks/DataFetching1.jsx";
import DataFetching2 from "./useEffectHooks/DataFetching2.jsx";
import { ToggleVisibility } from "./useStateExercises/ToggleVisibility.jsx";
import { TodoList } from "./useStateExercises/TodoList.jsx";
import App1 from "./useContextDemos/App1.jsx";
import AppComp from "./useContextDemos2/AppComp.jsx";
import { ReducerDemo } from "./useReducerDemo/ReducerDemo.jsx";
import { ReducerDemo1 } from "./useReducerDemo/ReducerDemo1.jsx";
import ReducerDemo2 from "./useReducerDemo/ReducerDemo2.jsx";
import TodoListDemo from "./useReducerDemo/TodoListDemo.jsx";
import TodoDemo2 from "./useReducerDemo/TodoDemo2.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App />
    <PostComment></PostComment>
    <HookCounter2 />
    <HookObject />
    <TextLength />
    <ClassCompoEffect />
    <HookComponent />
    <Mouseover />
    <MouseMoveFunc />
    <UseEffectDemo1 />
    <DataFetching />
    <DataFetching1 />
    <DataFetching2 /> */}
    {/* <ToggleVisibility/> */}
    {/* <TodoList/> */}
    {/* <App1></App1> */}
    {/* <AppComp/> */}
    {/* <ReducerDemo/> */}
    {/* <ReducerDemo1/> */}
    {/* <ReducerDemo2/> */}
    <TodoListDemo/>
    <TodoDemo2/>/
    

    
   
  </React.StrictMode>
);
