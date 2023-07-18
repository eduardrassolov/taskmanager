import { MdPriorityHigh } from "react-icons/md";
// import { Option, Select } from "@material-tailwind/react";
import { useUpdateTask } from "../CurTaskContext";

const priorityList = ["High", "Medium", "Low", "No priority"];
const defaultPriority = priorityList.indexOf("No priority");

function DetailsPriotiry() {
  const { updTask, dispatch } = useUpdateTask();

  const handlePriority = (value) =>
    dispatch({ type: "priority", payload: value });

  const curPriority = updTask?.priority || priorityList[defaultPriority];

  return (
    <div className="mb-5 flex flex-col items-center pt-5">
      <div className="mb-2 flex w-full items-center">
        <MdPriorityHigh size={"2rem"} />
        <h2 className="ml-1">Choose priority of task:</h2>
      </div>

      <div className="w-full pb-4">
        <select
          label={"Priority"}
          value={curPriority}
          onChange={handlePriority}
          className="w-full rounded-xl focus:ring-0 focus:ring-offset-0"
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
