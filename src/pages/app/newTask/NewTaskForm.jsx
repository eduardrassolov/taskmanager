import { useState } from "react";
import { Collapse } from "@material-tailwind/react";
import { PlusIcon as AddIcon } from "@heroicons/react/24/outline";
// import { XMarkIcon as CancelIcon } from "@heroicons/react/24/outline";
// import { newTaskReducer as reducer, initialState } from "./newTaskReducer.js";

import { Form, useActionData } from "react-router-dom";
import "animate.css";
import Button from "../../../components/buttons/Button";

function NewTaskForm() {
  // const [{ isOpen, taskName }, dispatch] = useReducer(reducer, initialState);
  const [taskName, setTaskName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const error = useActionData();
  console.log("err", error);

  return (
    <>
      <Form method="post" className="mx-auto mb-5 ">
        {!isOpen ? (
          <>
            <div
              className="items-left justify-left flex  cursor-pointer px-2 py-3 hover:bg-gray-100 "
              onClick={() => setIsOpen(true)}
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
          <div className=" mt-2 flex  items-center py-1">
            <Button type={"submit"}>Add task</Button>
            <Button variant={"outlined"} onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </Collapse>
      </Form>
    </>
  );
}

export default NewTaskForm;
