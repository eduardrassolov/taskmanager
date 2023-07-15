import { MdPriorityHigh } from "react-icons/md";
import { Option, Select } from "@material-tailwind/react";
import { useUpdateTask } from "../CurTaskContext";

const priorityList = ["High", "Medium", "Low", "No priority"];
const defaultPriority = priorityList.indexOf("No priority");

function DetailsPriotiry() {
  const { updTask, dispatch } = useUpdateTask();

  const handlePriority = (value) =>
    dispatch({ type: "priority", payload: value });

  const curPriority = updTask?.priority || priorityList[defaultPriority];

  return (
    <div className="mt-5 flex items-center">
      <MdPriorityHigh size={"1.5rem"} />
      <div className="mx-3 w-fit ">
        <Select
          label={"Priority"}
          color="teal"
          value={curPriority}
          onChange={handlePriority}
        >
          {priorityList.map((priority) => (
            <Option key={priority} value={priority}>
              {priority}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default DetailsPriotiry;
