import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { GrTree } from "react-icons/gr";
import SubTaskItem from "./SubTaskItem";
import { useUpdateTask } from "../../CurTaskContext";
import Progress from "./Progress";

function SubTasksList() {
  const { updTask, dispatch } = useUpdateTask();
  //Array of subtasks
  const subTasks = updTask?.subTasks || [];
  //State to show or hide the form to add subtasks
  const [showInput, setShowInput] = useState(false);
  //State to store the value of the name subtask input
  const [subtaskTitle, setSubtaskTitle] = useState("");

  //Input change event of the name subtask input
  const handleInput = ({ target }) => setSubtaskTitle((prev) => target.value);

  //Submit event of new subtask
  function handleAddSubtaskSubmit(e) {
    e.preventDefault();

    if (!subtaskTitle.trim()) return;
    dispatch({
      type: "addSubtask",
      payload: {
        key: crypto.randomUUID(),
        title: subtaskTitle,
        isCompleted: false,
      },
    });
    clean();
  }
  function clean() {
    setSubtaskTitle("");
    setShowInput(false);
  }

  const countCompleted = subTasks.filter(
    (subTask) => subTask.isCompleted
  ).length;

  console.log("subTasks", subTasks);
  console.log("title", subtaskTitle);

  return (
    <div className="mb-5 flex flex-col items-center pt-5">
      <div className="mb-2 flex w-full items-center">
        <GrTree size={"2rem"} className="self-start" />
        <h2 className="ml-1">Add subtasks:</h2>
      </div>
      <div className="mb-2 ml-3 w-full ">
        {subTasks.length ? (
          <Progress completed={countCompleted} total={subTasks.length} />
        ) : null}

        {subTasks.length
          ? subTasks.map((subTask) => (
              <SubTaskItem
                key={subTask.key}
                subTask={subTask}
                dispatch={dispatch}
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
              className="my-2 h-8 w-full"
              onInput={handleInput}
              value={subtaskTitle}
              autoFocus
              required
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
