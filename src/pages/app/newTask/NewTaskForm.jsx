import { useReducer } from "react";
// import Button from "../buttons/Button";

import "animate.css";
import { Button, Collapse } from "@material-tailwind/react";
import { PlusIcon as AddIcon } from "@heroicons/react/24/outline";
import { XMarkIcon as CancelIcon } from "@heroicons/react/24/outline";

import { newTaskReducer as reducer, initialState } from "./newTaskReducer.js";
import { Form } from "react-router-dom";
import { useTasks } from "../../../contexts/TasksContext.jsx";

function NewTaskForm() {
  const { addTask } = useTasks();
  const [{ isOpen, taskName }, dispatch] = useReducer(reducer, initialState);

  const handleInput = ({ target: { value } }) =>
    dispatch({ type: "input", payload: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName);
    dispatch({ type: "reset" });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="mb-5">
        {!isOpen ? (
          <>
            <div
              className="items-left justify-left mx-auto flex w-[400px] cursor-pointer rounded-full px-2 py-3 hover:bg-wedgewood-100 "
              onClick={() => dispatch({ type: "open" })}
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
              onInput={handleInput}
              autoFocus
              required
              type="text"
              name="title"
              className="mx-auto flex min-w-[400px] rounded-lg bg-wedgewood-50  py-2 focus:ring-2 focus:ring-wedgewood-500 focus:ring-offset-0"
            />
          </>
        )}
        <Collapse open={isOpen}>
          <div className="mx-auto mt-2  flex w-[400px] items-center p-0">
            <Button
              className="bg-wedgewood-400 hover:bg-wedgewood-500"
              type="submit"
            >
              Add task
            </Button>
            <CancelIcon
              onClick={() => dispatch({ type: "reset" })}
              className="text-slate-600 ml-2 h-10 w-10 cursor-pointer rounded-lg transition duration-300 hover:bg-gray-100"
            />
          </div>
        </Collapse>
      </Form>
    </>
  );
}

export default NewTaskForm;
