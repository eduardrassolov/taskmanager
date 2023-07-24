import { MdPriorityHigh } from "react-icons/md";
import { useUpdateTask } from "../CurTaskContext";
import PropTypes from "prop-types";
import HeaderInfo from "./HeaderInfo";

const priorityList = ["High", "Medium", "Low", "No priority"];
const defaultPriority = priorityList.indexOf("No priority");

DetailsPriotiry.propTypes = {
  register: PropTypes.func,
};

function DetailsPriotiry({ register }) {
  const { updTask, dispatch } = useUpdateTask();

  const handlePriority = ({ target }) =>
    dispatch({ type: "priority", payload: target.value });
  const curPriority = updTask?.priority || priorityList[defaultPriority];

  return (
    <div className="mb-5 flex flex-col items-center pt-5">
      <HeaderInfo IconComp={<MdPriorityHigh size={"1.5rem"} />}>
        Choose priority of task:
      </HeaderInfo>

      <div className="w-full pb-4">
        <select
          {...register("priority")}
          label={"Priority"}
          value={curPriority}
          onChange={handlePriority}
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
