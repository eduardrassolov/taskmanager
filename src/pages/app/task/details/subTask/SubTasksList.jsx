import { useState } from "react";
import { GrTree } from "react-icons/gr";
import SubTaskItem from "./SubTaskItem";
import { useUpdateTask } from "../../CurTaskContext";
import Progress from "./Progress";
import Button from "../../../../../components/buttons/Button";

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
      <div className="mb-2 w-full">
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
          <Button size={"xs"} onClick={() => setShowInput(true)}>
            <span>Add subtask</span>
          </Button>
        ) : (
          <div className="w-full">
            <input
              type="text"
              className="my-2 h-8 w-full rounded-lg"
              onInput={handleInput}
              value={subtaskTitle}
              autoFocus
              required
            />
            <div className="flex">
              <Button onClick={handleAddSubtaskSubmit} size="xs">
                Add
              </Button>
              <Button
                variant="outlined"
                size="xs"
                onClick={() => setShowInput(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubTasksList;
