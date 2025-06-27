import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddBUttonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-md-5 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-md-4 mb-2">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-md-2 mb-2">
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={handleAddBUttonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
