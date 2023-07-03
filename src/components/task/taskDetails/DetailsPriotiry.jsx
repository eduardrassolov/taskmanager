import { MdPriorityHigh } from "react-icons/md";
import OptionItem from "./OptionItem";
import { Option, Select } from "@material-tailwind/react";
import PtopTypes from "prop-types";
import { useTaskDetail } from "../../../contexts/TaskDetailContext";

DetailsPriotiry.propTypes = {
  onRemoveOption: PtopTypes.func,
};

function DetailsPriotiry({ onRemoveOption }) {
  const { selectedTask, editField } = useTaskDetail();

  const priority = selectedTask?.priority || "No priority";

  return (
    <OptionItem onRemoveOption={onRemoveOption} name={"priority"}>
      <MdPriorityHigh size={"1.5rem"} />
      <div className="mx-3 w-fit ">
        <Select
          label={priority}
          color="teal"
          onChange={(value) => editField("priority", value)}
          defaultValue={priority}
        >
          <Option value="High" className="border-b-red-500 text-red-500">
            High
          </Option>
          <Option value="Medium" className="text-orange-500">
            Medium
          </Option>
          <Option value="Low" className="text-green-500">
            Low
          </Option>
          <Option value="No priotiry" className="text-gray-500">
            No priority
          </Option>
        </Select>
      </div>
    </OptionItem>
  );
}

export default DetailsPriotiry;
