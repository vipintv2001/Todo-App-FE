import React, { useEffect, useState } from "react";
import List from "./List";
import { getAllTodo, uploadTodo } from "./services/allApi";
import { toast } from "react-toastify";

function Todo() {
  const [todo, setTodo] = useState({
    todoCaption: "",
    status: "pending",
  });

  const handleSubmit = async () => {
    if (!todo.todoCaption) {
      toast.Danger("please fill the form");
    } else {
      const result = await uploadTodo(todo);
      console.log(result);
      toast.success("succesfully added new TODO")
      setTodo({ todoCaption: "", status: "pending" });
      getTodo()
    }
  };

  const [allTodo, setAllTodo] = useState([]);

  const getTodo = async () => {
    const result = await getAllTodo();
    const { data } = result;
    setAllTodo(data);
    console.log(allTodo);
  };
  

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          style={{ backgroundColor: "#98FF98", width: "700px" }}
          className="p-5 rounded"
        >
          <h1 className="text-center text-dark">TODO APP</h1>
          <div className="d-flex justify-content-between mt-5">
            <input
              type="text"
              className="form-control w-75"
              placeholder="Enter your ToDo"
              value={todo.todoCaption}
              onChange={(e) =>
                setTodo({ ...todo, todoCaption: e.target.value })
              }
            />
            <button
              className="btn btn-secondary ps-3 pe-3"
              onClick={handleSubmit}
            >
              ADD
            </button>
          </div>
          <div>
            {allTodo?.map((item)=>(
            <div className="mt-4">
              <List displayTodo={item} getTodo={getTodo}/>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
