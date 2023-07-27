import { MdPriorityHigh } from "react-icons/md";
// import { useUpdateTask } from "../CurTaskContext";
import PropTypes from "prop-types";
import HeaderInfo from "./HeaderInfo";

const priorityList = ["High", "Medium", "Low", "No priority"];

DetailsPriotiry.propTypes = {
  register: PropTypes.func,
  task: PropTypes.object,
};

function DetailsPriotiry({ task, register }) {
  return (
    <div className="mb-5 flex flex-col items-center pt-5">
      <HeaderInfo IconComp={<MdPriorityHigh size={"1.5rem"} />}>
        Choose priority of task:
      </HeaderInfo>

      <div className="w-full pb-4">
        <select
          {...register("priority")}
          label={"Priority"}
          name="priority"
          className="w-full rounded-xl p-1 focus:ring-0 focus:ring-offset-0"
        >
          {priorityList.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DetailsPriotiry;
