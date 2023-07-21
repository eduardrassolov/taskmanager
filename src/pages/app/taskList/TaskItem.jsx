import PropTypes from "prop-types";
// import { XCircleIcon as DeleteIcon } from "@heroicons/react/24/outline";
import { PiTrash } from "react-icons/pi";
import { useNavigate } from "react-router";
import { Form, useSubmit } from "react-router-dom";
import "animate.css";
// import { controller } from "./taskController";
import BageList from "./BageList";

TaskItem.propTypes = {
  task: PropTypes.object,
};

function TaskItem({ task }) {
  const navigate = useNavigate();
  const submit = useSubmit();

  // const handleCheckbox = async (e) => {
  //   const { data, error } = await controller.completeTask(task._id);
  //   console.log(data, error);
  //   console.log(e);
  // };

  const handleCheckbox = async (e) => {
    // fetcher.submit({ taskId: task._id }, { method: "put", action: "?" });
    submit({ taskId: task._id }, { method: "put" });
  };

  const handleDelete = async () => {
    submit({ taskId: task._id }, { method: "delete" });
  };

  const handleItemCLick = ({ target }) => {
    if (target.tagName === "DIV" || target.tagName === "LABEL")
      navigate(`${task._id}`);
  };

  const taskItemStyle = () => {
    let style =
      "mx-auto my-1 flex flex-col cursor-pointer justify-between border-l-4 bg-gray-100 px-5 py-4 hover:bg-gray-200 ";
    switch (task?.priority?.toLowerCase()) {
      case "low":
        return style + "border-green-300";
      case "medium":
        return style + "border-yellow-300";
      case "high":
        return style + "border-red-300";
      default:
        return style;
    }
  };

  return (
    <>
      <div className={taskItemStyle()} onClick={handleItemCLick}>
        <div className="flex w-full justify-between">
          <div className="flex cursor-pointer items-center">
            <div>
              <Form>
                <input
                  onChange={handleCheckbox}
                  defaultChecked={task.isCompleted.status}
                  type="checkbox"
                  id={task.id}
                  className="h-5 w-5 cursor-pointer rounded-full text-wedgewood-500 shadow hover:bg-wedgewood-300 focus:ring-current"
                />
              </Form>
            </div>
            <div className="mx-2">
              <label
                htmlFor={task.id}
                className="text-slate-600 break-all text-xl"
              >
                {task.title}
              </label>
            </div>
          </div>

          <Form className="flex items-center">
            <button name="taskId" onClick={handleDelete} value={task._id}>
              <PiTrash className="text-500 h-6 w-auto cursor-pointer text-gray-500 hover:text-wedgewood-800" />
            </button>
          </Form>
        </div>
        <BageList task={task} />
      </div>
    </>
  );
}

export default TaskItem;
