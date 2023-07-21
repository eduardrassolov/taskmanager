import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types";

SubTaskItem.propTypes = {
  subTask: PropTypes.object,
  dispatch: PropTypes.func,
};

//TODO refactor code down
function SubTaskItem({ subTask, dispatch }) {
  function handleCheckBox({ target }) {
    console.log("target", target);
    dispatch({
      type: "completeSubtask",
      payload: target.id,
    });
  }

  return (
    <div
      className="mb-2 flex justify-between bg-gray-50 "
      key={crypto.randomUUID()}
    >
      <div className="overflow- flex items-center break-all">
        <input
          id={subTask.key}
          type="checkbox"
          className="mr-1"
          defaultChecked={subTask.isCompleted}
          onInput={handleCheckBox}
        />

        <label
          htmlFor={subTask.key}
          suppressContentEditableWarning={true}
          className={`${
            subTask.isCompleted ? "line-through" : ""
          }  cursor-pointer`}
        >
          {subTask.title}
        </label>
      </div>

      {/* TODO refactor to component repeat same in DetailsTitle */}
      <div className="flex items-center gap-3">
        <AiOutlineDelete
          className="cursor-pointer"
          size={"1.2rem"}
          onClick={() =>
            dispatch({ type: "removeSubtask", payload: subTask.key })
          }
        />
      </div>
    </div>
  );
}

export default SubTaskItem;
