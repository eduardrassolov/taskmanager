import { AiOutlineProfile } from "react-icons/ai";
import PropTypes from "prop-types";

DetailsTitle.propTypes = {
  task: PropTypes.object,
  dispatch: PropTypes.func,
};

// TODO: refactor code down
function DetailsTitle({ task, dispatch }) {
  const handleCheckBox = ({ target: { checked } }) =>
    dispatch({
      type: "checkTask",
      payload: { status: checked, timeCompleted: checked ? new Date() : null },
    });
  const handleInput = ({ target: { value } }) =>
    dispatch({ type: "title", payload: value });

  return (
    <>
      <div className="mb-5 flex flex-col">
        <div className="mb-2 flex w-full items-center">
          <AiOutlineProfile size={"2rem"} />
          <h2 className="ml-1">Task name:</h2>
        </div>
        <div className="flex items-center">
          <input
            defaultChecked={task?.isCompleted?.status}
            onChange={handleCheckBox}
            type="checkbox"
            id={task._id}
            className="mx-3 h-5 w-5 cursor-pointer rounded-full text-wedgewood-500 shadow hover:bg-wedgewood-300 focus:ring-current"
          />
          <input
            type="text"
            className="w-full rounded-lg p-1 text-base"
            onInput={handleInput}
            value={task?.title}
            required
          />
        </div>
      </div>
    </>
  );
}

export default DetailsTitle;
