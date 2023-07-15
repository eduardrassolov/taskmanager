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
      <div className="mb-5 flex items-center justify-between">
        <div className="flex w-full items-center">
          <AiOutlineProfile size={"1.5rem"} />
          <input
            defaultChecked={task?.isCompleted?.status}
            onChange={handleCheckBox}
            type="checkbox"
            id={task._id}
            className="mx-3 h-5 w-5 cursor-pointer rounded-full text-wedgewood-500 shadow hover:bg-wedgewood-300 focus:ring-current"
          />
          <input
            type="text"
            className="w-full"
            onInput={handleInput}
            value={task?.title}
          />
        </div>
      </div>
    </>
  );
}

export default DetailsTitle;
