/* eslint-disable no-undef */
import {
  // eslint-disable-next-line no-unused-vars
  AiOutlineCalendar,
} from "react-icons/ai";

import DetailsTitle from "./details/DetailsTitle";
import DetailsNotes from "./details/DetailsNotes";
import DetailReminder from "./details/DetailReminder";
import DetailsPriotiry from "./details/DetailsPriotiry";
import SubTasksList from "./details/subTask/SubTasksList";

import { Button } from "@material-tailwind/react";
import BackButton from "../../../components/buttons/BackButton";
import { useUpdateTask } from "./CurTaskContext";

//TODO refactor with reusable components 'DetailsTitle', 'DetailsNotes', 'DetailReminder', 'DetailsPriotiry', 'SubTasksList'

//TODO compare passing props to details components with taking props inside components
function MainInfoTask() {
  const { updTask, dispatch } = useUpdateTask();
  return (
    <div className="mt-5">
      {/* Display status & name of task */}
      <DetailsTitle task={updTask} dispatch={dispatch} />
      {/* Section of notes */}
      <DetailsNotes />
      {/* Component of reminder option*/}
      <DetailReminder />
      {/* Component of priority*/}
      <DetailsPriotiry />
      {/* Component of subTask*/}
      <SubTasksList />

      <Button
        className="mr-1 bg-wedgewood-400 hover:bg-wedgewood-500 "
        // onClick={confirmChanges}
        size="md"
      >
        <span>Confirm</span>
      </Button>
      <BackButton size="md">Cancel</BackButton>
    </div>
  );
}

export default MainInfoTask;
