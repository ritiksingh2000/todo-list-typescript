import React, { useEffect, useState } from "react";
import { TodoList } from "./InputModel";
import { TiCancel, TiDelete } from "react-icons/ti";

interface Props {
  todos: TodoList[];
  setTodos: React.Dispatch<React.SetStateAction<TodoList[]>>;
  setRefreshData: React.Dispatch<React.SetStateAction<boolean>>;
  refreshData: boolean;
}

const TodosListCompleted = ({
  todos,
  setTodos,
  setRefreshData,
  refreshData,
}: Props) => {
  const [completeTasks, setCompleteTasks] = useState<TodoList[]>([]);
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
    setCompleteTasks(
      todos.filter((todo) => todo.isDone === true).map((todo) => todo)
    );
  }, [refreshData, todos]);

  const DeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id).map((todo) => todo));
  };

  return (
    <>
      <div className="row g-0 border border-dark border-1 rounded">
        <div className="fw-bold fst-italic card-header h4 text-center text-light">
          Completed Tasks
        </div>
        {completeTasks.length > 0 ? (
          <>
            {completeTasks.map((todo) => (
              <div className="card bg-transparent p-2" key={todo.id}>
                <div className="card-body rounded  shadow pb-0 bg-success text-white">
                  <div className="row g-0">
                    <div className="col-9">
                      <p className="strike">{todo.todo}</p>
                    </div>
                    <div className="col-3">
                      <span>
                        <button
                          onClick={() => DeleteTask(todo.id)}
                          className="btn p-0 fs-5"
                        >
                          <TiDelete />
                        </button>
                      </span>
                      <span>
                        <button
                          onClick={() => markAsDone(todo.id)}
                          className="btn p-0 fs-5"
                        >
                          <TiCancel />
                        </button>
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

export default TodosListCompleted;
