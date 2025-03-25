import React from "react";
import { deleteTodo, updateTodo } from "./services/allApi";
import { ToastContainer, toast } from "react-toastify";

function List({ displayTodo, getTodo }) {
  const handleDelete = async (id) => {
    const result = await deleteTodo(id);
    console.log("delete response", result);
    if (result.status === 200) {
      toast.success("Deleted Succesfully");
    } else {
      toast.danger("something went Wrong");
    }
    getTodo();
  };

  const updateTodoStatus = async (id) => {
    const response = await updateTodo(id, { status: "done" });
    console.log("status updated");
    console.log(displayTodo);
    if (response.status === 200) {
      toast.success("Successfully done the Todo");
      getTodo();
    } else {
      toast.danger("something went wrong");
    }
  };

  return (
    <>
      <div
        className="w-100 p-1 rounded d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#343434", color: "#333333" }}
      >
        <p
          className="fw-bolder"
          style={{
            textDecoration:
              displayTodo.status === "done" ? "line-through" : "none",
            color: displayTodo.status === "done" ? "grey" : "white",
          }}
        >
          {displayTodo.todoCaption}
        </p>
        <div>
          <button
            className="btn btn-info me-2"
            onClick={() => updateTodoStatus(displayTodo.id)}
            disabled={displayTodo.status === "done"}
          >
            <i class="fa-solid fa-check"></i>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(displayTodo.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>{" "}
      :
    </>
  );
}

export default List;
