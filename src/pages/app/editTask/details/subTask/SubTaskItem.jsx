import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types";

SubTaskItem.propTypes = {
  task: PropTypes.object,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
  index: PropTypes.number,
};

//TODO refactor code down
function SubTaskItem({ task, onRemove, onUpdate, index }) {
  const handleCheckBox = () =>
    onUpdate(index, { ...task, isCompleted: !task.isCompleted });
  return (
    <div
      className="mb-2 flex justify-between bg-gray-50 "
      key={crypto.randomUUID()}
    >
      <div className="overflow- flex items-center break-all">
        <input
          id={task.key}
          type="checkbox"
          className="mr-1"
          defaultChecked={task.isCompleted}
          onInput={handleCheckBox}
        />

        <label
          htmlFor={task.key}
          suppressContentEditableWarning={true}
          className={`${
            task.isCompleted ? "line-through" : ""
          }  cursor-pointer`}
        >
          {task.title}
        </label>
      </div>

      {/* TODO refactor to component repeat same in DetailsTitle */}
      <div className="flex items-center gap-3">
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
