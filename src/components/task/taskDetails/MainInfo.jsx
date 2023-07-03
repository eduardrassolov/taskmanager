import {
  // eslint-disable-next-line no-unused-vars
  AiOutlineCalendar,
} from "react-icons/ai";

import SubTasks from "./subTask/SubTasksList";

import DetailsTitle from "./DetailsTitle";
import DetailsNotes from "./DetailsNotes";
import DetailReminder from "./DetailReminder";
import DetailsPriotiry from "./DetailsPriotiry";
import { useTaskDetail } from "../../../contexts/TaskDetailContext";

function MainInfoTask() {
  const { optionList } = useTaskDetail();

  //array of active options
  const activeOption = optionList
    .filter((option) => option.isActive)
    .map((option) => option.name);

  // check if all options are active - if yes, set width of section MainInfo to 100% else 80% (to show buttons with options)
  const width = activeOption.length === optionList.length ? "w-full" : "w-4/5";

  return (
    <div className={width}>
      {/* Display status & name of task */}
      <DetailsTitle />

      {/* Section of notes */}
      <DetailsNotes />

      {/* Component of reminder option*/}
      {activeOption.includes("reminder") && <DetailReminder />}

      {/* Component of reminder priority*/}
      {activeOption.includes("priority") && <DetailsPriotiry />}

      {/* Component of reminder subTask*/}
      {activeOption.includes("subTasks") && <SubTasks />}
    </div>
  );
}

export default MainInfoTask;
