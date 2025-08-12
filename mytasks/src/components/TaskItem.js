import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/tasksSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          style={{ marginRight: "8px" }}
        />
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "4px 8px",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
