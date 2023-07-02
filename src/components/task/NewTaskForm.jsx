import { useState } from "react";
// import Button from "../buttons/Button";
import { useTasks } from "../../contexts/TasksContext";

import "animate.css";
import { Button, Collapse } from "@material-tailwind/react";
import { PlusIcon as AddIcon } from "@heroicons/react/24/outline";
import { XMarkIcon as CancelIcon } from "@heroicons/react/24/outline";
import Notification from "../Notification";

function NewTaskForm() {
  const { addTask } = useTasks();
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [isNofificationOpen, setIsNotificationOpen] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);
  const handleInput = ({ target }) => setTaskName(target.value);
  function handleSubmit(e) {
    e.preventDefault();

    try {
      addTask(taskName);

      setTaskName("");
      setIsNotificationOpen(true);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isNofificationOpen && (
        <Notification color={"success"}>Task sucessfuly added</Notification>
      )}

      <form onSubmit={handleSubmit}>
        {!open ? (
          <>
            <div
              className="items-left justify-left taskform mx-auto mt-5 flex w-[400px] cursor-pointer rounded-full px-2 py-3 hover:bg-wedgewood-100 "
              onClick={handleOpen}
            >
              <AddIcon className="taskform w-5" />
              <p className="taskform mx-2 text-xl hover:text-wedgewood-800">
                Add new Task
              </p>
            </div>
          </>
        ) : (
          <>
            <input
              value={taskName}
              onInput={handleInput}
              autoFocus
              required
              type="text"
              className="mx-auto mt-5 flex min-w-[400px] rounded-lg  bg-wedgewood-50  py-2 focus:ring-2 focus:ring-wedgewood-500 focus:ring-offset-0"
            />
          </>
        )}
        <Collapse open={open}>
          <div className=" m-auto mt-2 flex w-[400px] items-center p-0">
            <Button
              className="bg-wedgewood-400 hover:bg-wedgewood-500"
              type="submit"
            >
              Add task
            </Button>
            <CancelIcon
              onClick={handleOpen}
              className="text-slate-600 ml-2 h-10 w-10 cursor-pointer rounded-lg transition duration-300 hover:bg-gray-100"
            />
          </div>
        </Collapse>
      </form>
    </>
  );
}

export default NewTaskForm;
