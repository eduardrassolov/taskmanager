import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { GrTree } from "react-icons/gr";
import SubTaskItem from "./SubTaskItem";
import { useUpdateTask } from "../../CurTaskContext";

function SubTasksList() {
  const { updTask } = useUpdateTask();
  //Array of subtasks
  const subTasks = updTask?.subTasks || [];
  //State to show or hide the form to add subtasks
  const [showInput, setShowInput] = useState(false);
  //State to store the value of the name subtask input
  const [subtaskTitle, setSubtaskTitle] = useState("");

  //Input change event of the name subtask input
  const handleInput = ({ target }) => setSubtaskTitle((prev) => target.value);

  function handleTaskCompleted({ target }) {}
  //Submit event of new subtask
  function handleAddSubtaskSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!subtaskTitle.trim()) return;
  } //Remove subtask
  const handleRemoveSubTask = (id) => function handleEditSubTask(id, title) {};

  return (
    <div className="mt-5 flex items-center">
      <GrTree size={"1.5rem"} className="self-start" />
      <div className="mx-3 mb-2 w-full ">
        <h3 className="mb-2">Sub tasks</h3>

        {subTasks.length
          ? subTasks.map((subTask) => (
              <SubTaskItem
                key={subTask.id}
                subTask={subTask}
                onRemove={handleRemoveSubTask}
                onComplete={handleTaskCompleted}
              />
            ))
          : ""}

        {!showInput ? (
          <Button
            variant="text"
            color="gray"
            className="mr-1"
            onClick={() => setShowInput(true)}
          >
            <span>Add subtask</span>
          </Button>
        ) : (
          <form onSubmit={handleAddSubtaskSubmit} className="w-full">
            <input
              type="text"
              className="my-2 h-8 w-full rounded-md"
              onInput={handleInput}
              value={subtaskTitle}
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
                onClick={() => setShowInput(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SubTasksList;
