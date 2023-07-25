/* eslint-disable no-unused-vars */
import { useState } from "react";
import { GrTree } from "react-icons/gr";
import SubTaskItem from "./SubTaskItem";
import { useUpdateTask } from "../../CurTaskContext";
import Progress from "./ProgressBar";
import Button from "../../../../../components/buttons/Button";
import PropTypes from "prop-types";
import { useFieldArray } from "react-hook-form";
import { propTypesIndex } from "@material-tailwind/react/types/components/select";
import HeaderInfo from "../HeaderInfo";

SubTasksList.propTypes = {
  register: PropTypes.func,
  control: PropTypes.object,
  setValue: PropTypes.func,
  task: PropTypes.object,
};

function SubTasksList({ register, control, setValue, task }) {
  const [showInput, setShowInput] = useState(false);
  const [subtaskTitle, setSubtaskTitle] = useState("");

  // eslint-disable-next-line no-unused-vars
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "subTasks",
  });
  const countCompleted = fields.filter((subTask) => subTask.isCompleted).length;

  //Input change event of the name subtask input
  const handleInput = ({ target }) => setSubtaskTitle((prev) => target.value);

  //Submit event of new subtask
  function handleAddSubtaskSubmit(e) {
    if (!subtaskTitle.trim()) return;
    append({
      isCompleted: false,
      title: subtaskTitle,
      key: crypto.randomUUID(),
    });
    clean();
  }
  function clean() {
    setSubtaskTitle("");
    setShowInput(false);
  }

  // eslint-disable-next-line no-unused-vars

  return (
    <div className="mb-5 flex flex-col items-center pt-5">
      <HeaderInfo IconComp={<GrTree size={"1.5rem"} />}>Subtasks:</HeaderInfo>
      <div className="mb-2 w-full">
        {fields.length ? (
          <Progress completed={countCompleted} total={fields.length} />
        ) : null}

        {fields.length
          ? fields.map((task, index) => (
              <SubTaskItem
                key={task.id}
                onRemove={remove}
                onUpdate={update}
                index={index}
                task={task}
              />
            ))
          : null}

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
              placeholder="Enter subtask name"
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
