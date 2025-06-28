import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="row align-items-center border rounded p-2 mb-2 shadow-sm bg-light">
      <div className="col-md-6">{todoName}</div>
      <div className="col-md-4">{todoDate}</div>
      <div className="col-md-2 text-end">
        <button
          className="btn btn-danger"
          onClick={() => onDeleteClick(todoName)}
        >
          <MdDelete/>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;