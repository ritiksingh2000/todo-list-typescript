import React, { useEffect, useState } from "react";
import { TodoList } from "./InputModel";
import { TiTick, TiDelete } from "react-icons/ti";

interface Props {
  todos: TodoList[];
  setTodos: React.Dispatch<React.SetStateAction<TodoList[]>>;
  setRefreshData: React.Dispatch<React.SetStateAction<boolean>>;
  refreshData: boolean;
}

const TodosList = ({ todos, setTodos, setRefreshData, refreshData }: Props) => {
  const [incompleteTasks, setIncompleteTasks] = useState<TodoList[]>([]);
  const markAsDone = (id: number) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      setRefreshData(!refreshData);
      console.log(todos);
    });
  };

  useEffect(() => {
    setIncompleteTasks(
      todos.filter((todo) => todo.isDone === false).map((todo) => todo)
    );
  }, [refreshData, todos]);

  const DeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id).map((todo) => todo));
  };

  return (
    <>
      <div className="row g-0 border border-dark border-1 rounded">
        <div className="fw-bold fst-italic card-header h4 text-center text-light">
          Incomplete Tasks
        </div>
        {incompleteTasks.length > 0 ? (
          <>
            {incompleteTasks.map((todo) => (
              <div className="card bg-transparent p-2" key={todo.id}>
                <div className="card-body rounded  shadow pb-0 bg-warning">
                  <div className="row g-0">
                    <div className="col-10">
                      <p>{todo.todo}</p>
                    </div>
                    <div className="col-2 py-0 my-0">
                      <span
                        onClick={() => DeleteTask(todo.id)}
                        className="btn btn-lg p-0"
                      >
                        <TiDelete />
                      </span>
                      <span
                        onClick={() => markAsDone(todo.id)}
                        className="btn btn-lg p-0"
                      >
                        <TiTick />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="row g-0">
              <div className="col-8 mx-auto mt-2">
                <div
                  className="alert alert-warning h3 text-center"
                  role="alert"
                >
                  Empty List
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TodosList;
