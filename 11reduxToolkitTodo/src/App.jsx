import { useState } from "react";

import "./App.css";
import AddTodo from "./app/components/AddTodo";
import Todos from "./app/components/Todos";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl mt-5 font-bold">To Do Using Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
