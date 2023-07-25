/* eslint-disable no-unused-vars */
import { AiOutlineProfile } from "react-icons/ai";
import PropTypes from "prop-types";
import HeaderInfo from "./HeaderInfo";

DetailsTitle.propTypes = {
  task: PropTypes.object,
  dispatch: PropTypes.func,
  register: PropTypes.func,
};

// TODO: refactor code down
function DetailsTitle({ task, register }) {
  return (
    <>
      <div className="mb-5 flex flex-col">
        <HeaderInfo IconComp={<AiOutlineProfile size={"1.5rem"} />}>
          Task name:
        </HeaderInfo>
        <div className="flex items-center">
          <input
            {...register("isCompleted")}
            type="checkbox"
            className="mx-3 h-5 w-5 cursor-pointer rounded-full text-wedgewood-500 shadow hover:bg-wedgewood-300 focus:ring-current"
          />
          <input
            {...register("title")}
            type="text"
            className="w-full rounded-lg p-1 text-base"
          />
        </div>
      </div>
    </>
  );
}

export default DetailsTitle;
