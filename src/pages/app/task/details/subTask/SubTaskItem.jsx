import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheckCircle,
  AiOutlineClose,
} from "react-icons/ai";
import PropTypes from "prop-types";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

SubTaskItem.propTypes = {
  subTask: PropTypes.object,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
  onComplete: PropTypes.func,
};

//TODO refactor code down
function SubTaskItem({ subTask, onEdit, onRemove, onComplete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(subTask.title);

  const handleInputTittle = ({ target }) => {
    setTitle((prev) => target.value);
  };
  function handleEditConfirm() {
    if (!title.trim()) return;
    onEdit(subTask.id, title);
    setIsEdit((prev) => !prev);
  }

  function handleEditMode() {
    console.log("edit");
    setIsEdit((prev) => !prev);
    setTitle(subTask.title);
  }

  return (
    <div className="mb-2 flex justify-between" key={crypto.randomUUID()}>
      <div className="flex items-center">
        <input
          id={subTask.id}
          type="checkbox"
          className="mr-1"
          defaultChecked={subTask.isCompleted}
          onChange={onComplete}
          disabled={isEdit}
        />
        {isEdit ? (
          <>
            <Input
              type="text"
              value={title}
              color="teal"
              label="Edit subtask"
              autoFocus
              onChange={handleInputTittle}
              className="focus:border-wedgewood-400 focus:ring-0 focus:ring-wedgewood-400 focus:ring-offset-0"
            />
          </>
        ) : (
          <label
            htmlFor={subTask.id}
            suppressContentEditableWarning={true}
            className={`${
              subTask.isCompleted ? "line-through" : ""
            }  cursor-pointer`}
          >
            {subTask.title}
          </label>
        )}
      </div>

      {/* TODO refactor to component repeat same in DetailsTitle */}
      <div className="flex items-center gap-3">
        {isEdit ? (
          <>
            <AiOutlineCheckCircle
              className="cursor-pointer"
              size={"1.1rem"}
              onClick={handleEditConfirm}
            />
            <AiOutlineClose
              className="cursor-pointer"
              onClick={handleEditMode}
            />
          </>
        ) : (
          <>
            <AiOutlineEdit
              className={`${isEdit ? "hidden" : ""} cursor-pointer`}
              size={"1.2rem"}
              onClick={handleEditMode}
            />
          </>
        )}

        <AiOutlineDelete
          className="cursor-pointer"
          size={"1.2rem"}
          onClick={() => onRemove(subTask.id)}
        />
      </div>
    </div>
  );
}

export default SubTaskItem;
