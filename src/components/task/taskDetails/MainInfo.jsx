import OptionItem from "./OptionItem";

import {
  // eslint-disable-next-line no-unused-vars
  AiOutlineCalendar,
  AiOutlineComment,
} from "react-icons/ai";

import { MdPriorityHigh } from "react-icons/md";
import { Option, Select, Textarea } from "@material-tailwind/react";
import SubTasks from "./subTask/SubTasksList";
import PtopTypes from "prop-types";
import { useState } from "react";
import DetailsTitle from "./DetailsTitle";

MainInfo.propTypes = {
  currentTask: PtopTypes.object,
  optionList: PtopTypes.array,
  onRemoveOption: PtopTypes.func,
};

function MainInfo({ currentTask, optionList, onRemoveOption }) {
  //controlled state of priority option
  const [priority, setPriority] = useState("");

  //array of active options
  const activeOption = optionList
    .filter((option) => option.isActive)
    .map((option) => option.name);

  //handle priority option
  const handlePriority = (value) => setPriority(value);

  // check if all options are active - if yes, set width of section MainInfo to 100% else 80% (to show buttons with options)
  const width = activeOption.length === optionList.length ? "w-full" : "w-4/5";

  return (
    <div className={width}>
      {/* Display status & name of task */}
      <DetailsTitle task={currentTask} />

      {/* Section of notes */}
      <section className="mb-5 flex">
        <AiOutlineComment size={"1.5rem"} />

        <div className="mx-3 w-full">
          <h3 className="mb-2">Notes</h3>
          <Textarea
            color="teal"
            label="Add your notes..."
            className="focus:ring-0"
          />
        </div>
      </section>

      {/* Component of reminder option*/}
      {activeOption.includes("reminder") && (
        <>
          <OptionItem onRemoveOption={onRemoveOption} name={"reminder"}>
            <AiOutlineCalendar size={"1.5rem"} />
            <input
              type="datetime-local"
              className=" mx-3 rounded-xl focus:border-wedgewood-400 focus:ring-0 focus:ring-wedgewood-400 focus:ring-offset-0"
            />
          </OptionItem>
        </>
      )}

      {/* Component of reminder priority*/}
      {activeOption.includes("priority") && (
        <OptionItem onRemoveOption={onRemoveOption} name={"priority"}>
          <MdPriorityHigh size={"1.5rem"} />
          <div className="mx-3 w-fit ">
            <Select
              label="Select priority"
              color="teal"
              onChange={handlePriority}
              value={priority}
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
      )}

      {/* Component of reminder subTask*/}
      {activeOption.includes("subtask") && (
        <SubTasks onRemoveOption={onRemoveOption} name={"subtask"} />
      )}
    </div>
  );
}

export default MainInfo;
