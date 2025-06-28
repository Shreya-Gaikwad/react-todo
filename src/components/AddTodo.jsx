import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
 

  const todoNameElement=useRef();
  const dueDateElement=useRef();

  const handleAddBUttonClicked = (event) => {
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    console.log(`${todoName} due on : ${dueDate}`);
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
    
        <form  onSubmit={handleAddBUttonClicked}>
          <div className="col-md-5 mb-2">
            <input
              type="text"
              ref={todoNameElement}
              className="form-control"
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-md-4 mb-2">
            <input
              type="date"
              ref={dueDateElement}
              className="form-control"
            />
          </div>
          <div className="col-md-2 mb-2">
            <button
            type="submit"
              className="btn btn-success w-100"
            >
              <BiMessageAdd />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
