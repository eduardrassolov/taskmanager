import { useState } from "react";
import { Collapse } from "@material-tailwind/react";
import { PlusIcon as AddIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/buttons/Button.jsx";
import { controller } from "../taskList/taskController.js";

function NewTaskForm() {
  const [taskName, setTaskName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickAdd = () => setIsOpen(true);
  const handleCloseForm = () => {
    setTaskName("");
    setIsOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    const { data, statusText } = await controller.addNewTask(taskName);

    console.log(data, statusText);

    navigate(location.pathname);
    cleanUp();
  };

  // eslint-disable-next-line no-unused-vars
  function cleanUp() {
    setTaskName("");
    setIsOpen(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto mb-5 ">
        {!isOpen ? (
          <>
            <div
              className="items-left justify-left flex  cursor-pointer px-2 py-3 hover:bg-gray-100 "
              onClick={handleClickAdd}
            >
              <AddIcon className=" w-5" />
              <p className=" mx-2 text-xl hover:text-wedgewood-800">
                Add new Task
              </p>
            </div>
          </>
        ) : (
          <>
            <input
              value={taskName}
              onInput={({ target }) => setTaskName(target.value)}
              autoFocus
              placeholder="Enter name of task"
              required
              type="text"
              name="title"
              className="flex w-full rounded-lg py-2 sm:mx-auto"
            />
          </>
        )}
        <Collapse open={isOpen}>
          <div className="mt-2 flex items-center py-1">
            <Button type="submit">Add task</Button>
            <Button variant={"outlined"} onClick={handleCloseForm}>
              Cancel
            </Button>
          </div>
        </Collapse>
      </form>
    </>
  );
}

export default NewTaskForm;
