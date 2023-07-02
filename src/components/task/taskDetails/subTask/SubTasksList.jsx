import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { GrTree } from "react-icons/gr";
import PropTypes from "prop-types";
import OptionItem from "../OptionItem";
// import Input from "@material-tailwind/react";
import SubTaskItem from "./SubTaskItem";

SubTasks.propTypes = {
  onRemoveOption: PropTypes.func,
};

function SubTasks({ onRemoveOption }) {
  //Array of subtasks
  const [subTasks, setSubTasks] = useState([]);
  //State to show or hide the form to add subtasks
  const [open, setOpen] = useState(false);
  //State to store the value of the name subtask input
  const [tempTask, setTempTask] = useState("");

  //After click on button add subtask, the form is shown
  const handleAddTask = () => setOpen(true);
  //Input change event 0f the name subtask input
  const handleInput = ({ target }) => setTempTask((prev) => target.value);

  function handleTaskCompleted({ target }) {
    const id = target.id;
    setSubTasks((prev) =>
      prev.map((subTask) =>
        subTask.id === id
          ? { ...subTask, isCompleted: !subTask.isCompleted }
          : subTask
      )
    );
  }
  //Submit event of new subtask
  function handleAddTaskSubmit(e) {
    e.preventDefault();
    if (!tempTask) return;

    setSubTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: tempTask, isCompleted: false },
    ]);

    cleanUp();
  }
  //Remove subtask
  const handleRemoveSubTask = (id) =>
    setSubTasks((prev) => prev.filter((subTask) => subTask.id !== id));

  function handleEditSubTask(id, title) {
    console.log(title);
    setSubTasks((prev) =>
      prev.map((subTask) =>
        subTask.id === id ? { ...subTask, title: title } : subTask
      )
    );
    cleanUp();
  }
  function cleanUp() {
    setTempTask("");
    setOpen(false);
  }

  return (
    <>
      <OptionItem onRemoveOption={onRemoveOption} name={"subtask"}>
        <GrTree size={"1.5rem"} className="self-start" />
        <div className="mx-3 mb-2 w-full ">
          <h3 className="mb-2">Sub tasks</h3>

          {subTasks.length
            ? subTasks.map((subTask) => (
                <SubTaskItem
                  key={subTask.id}
                  subTask={subTask}
                  onEdit={handleEditSubTask}
                  onRemove={handleRemoveSubTask}
                  onComplete={handleTaskCompleted}
                />
              ))
            : ""}

          {!open ? (
            <Button
              variant="text"
              color="gray"
              className="mr-1"
              onClick={handleAddTask}
            >
              <span>Add subtask</span>
            </Button>
          ) : (
            <form onSubmit={handleAddTaskSubmit} className="w-full">
              <input
                type="text"
                className="my-2 h-8 w-full rounded-md"
                onInput={handleInput}
                value={tempTask}
                autoFocus
              />
              <div>
                <Button color="green" type="submit" size="sm" className="mr-1">
                  Add
                </Button>
                <Button
                  variant="text"
                  color="gray"
                  size="sm"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </OptionItem>
    </>
  );
}

export default SubTasks;
