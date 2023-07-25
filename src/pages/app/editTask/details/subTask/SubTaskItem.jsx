import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineClose,
  AiOutlineCheck,
} from "react-icons/ai";
import PropTypes from "prop-types";
import { useState } from "react";

SubTaskItem.propTypes = {
  task: PropTypes.object,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
  index: PropTypes.number,
  register: PropTypes.func,
};

//TODO refactor code down
function SubTaskItem({ task, onRemove, onUpdate, index, register }) {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleCheckBox = (e) =>
    onUpdate(index, { ...task, isCompleted: !task.isCompleted });
  const handleEditMode = () => {
    setNewTitle(task.title);
    setEditMode((prev) => !prev);
  };
  const handleConfirmEdit = () => {
    onUpdate(index, { ...task, title: newTitle });
    setEditMode((prev) => !prev);
  };
  const handleEditTitle = ({ target }) => setNewTitle(target.value);

  console.log(task, newTitle);
  return (
    <div
      className="mb-2 flex justify-between bg-gray-50 "
      key={crypto.randomUUID()}
    >
      <div className="flex w-full items-center break-all">
        <input
          id={task.key}
          type="checkbox"
          className="mr-1 disabled:cursor-not-allowed disabled:border-gray-200"
          checked={task.isCompleted}
          onInput={handleCheckBox}
          disabled={editMode}
        />

        {!editMode ? (
          <label
            htmlFor={task.key}
            className={`${
              task.isCompleted ? "line-through" : ""
            }  cursor-pointer`}
          >
            {task.title}
          </label>
        ) : (
          <input
            type="text"
            className="mr-4 w-full border-none p-0"
            autoFocus
            onInput={handleEditTitle}
            value={newTitle}
            // onBlur={handleEditMode}
          />
        )}
      </div>

      {/* TODO refactor to component repeat same in DetailsTitle */}
      <div className="flex items-center gap-3">
        {editMode ? (
          <>
            <AiOutlineCheck
              className="cursor-pointer"
              size={"1.2rem"}
              onClick={handleConfirmEdit}
            />
            <AiOutlineClose
              className="cursor-pointer"
              size={"1.2rem"}
              onClick={handleEditMode}
            />
          </>
        ) : (
          <AiOutlineEdit
            className="cursor-pointer"
            size={"1.2rem"}
            onClick={handleEditMode}
          />
        )}

        <AiOutlineDelete
          className="cursor-pointer"
          size={"1.2rem"}
          onClick={() => onRemove(index)}
        />
      </div>
    </div>
  );
}

export default SubTaskItem;
