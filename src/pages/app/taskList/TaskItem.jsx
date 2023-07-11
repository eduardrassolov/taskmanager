import PropTypes from "prop-types";
import { XCircleIcon as DeleteIcon } from "@heroicons/react/24/outline";
import { useTasks } from "../../../contexts/TasksContext";
import { useNavigate } from "react-router";
import { controller } from "./taskController";
import "animate.css";

TaskItem.propTypes = {
  task: PropTypes.object,
};

function TaskItem({ task }) {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const { completeTask } = useTasks();

  const handleCheckbox = () => completeTask(task._id);
  const handleClickDelete = (id) => {
    try {
      controller.deleteTask(id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemCLick = ({ target }) => {
    if (target.tagName === "DIV" || target.tagName === "LABEL")
      navigate(`${task._id}`);
  };
  return (
    <>
      <div
        className="mx-auto my-1 flex min-w-[400px] max-w-[800px] cursor-pointer justify-between rounded-md bg-white px-5 py-2 hover:bg-gray-200"
        onClick={handleItemCLick}
      >
        <div className="flex cursor-pointer items-center">
          <input
            onInput={handleCheckbox}
            defaultChecked={task.isCompleted.status}
            type="checkbox"
            id={task.id}
            className="h-5 w-5 cursor-pointer rounded-full text-wedgewood-500 shadow hover:bg-wedgewood-300 focus:ring-current"
          />
          <label htmlFor={task.id} className="text-slate-600 mx-2">
            {task.title}
          </label>
        </div>
        <DeleteIcon
          className="text-500 h-8 cursor-pointer justify-items-end text-gray-500 hover:text-wedgewood-800"
          onClick={() => handleClickDelete(task._id)}
        />
      </div>
    </>
  );
}

export default TaskItem;
