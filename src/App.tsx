import React, { useState } from "react";
import "./App.css";
import InputFiels from "./Components/InputFiels";
import { TodoList } from "./Components/InputModel";
import TodosList from "./Components/TodosList";
import TodosListCompleted from "./Components/TodosListCompleted";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoList[]>([]);
  const [refreshData, setRefreshData] = useState<boolean>(false);

  const addTodo = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (input) {
      setTodos([...todos, { id: Date.now(), todo: input, isDone: false }]);
      setInput("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <header>
        <h1>Tasks List Maker</h1>
        <p>Made With Typescript By Ritik Singh</p>
      </header>

      <main className="container">
        <div>
          <InputFiels input={input} setInput={setInput} addTodo={addTodo} />
        </div>
        <div className="row g-0">
          <div className="col-6 px-1">
            <TodosList
              todos={todos}
              setTodos={setTodos}
              refreshData={refreshData}
              setRefreshData={setRefreshData}
            />
          </div>
          <div className="col-6 px-1">
            <TodosListCompleted
              todos={todos}
              setTodos={setTodos}
              refreshData={refreshData}
              setRefreshData={setRefreshData}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
