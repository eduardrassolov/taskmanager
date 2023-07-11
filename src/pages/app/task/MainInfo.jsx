/* eslint-disable no-undef */
import {
  // eslint-disable-next-line no-unused-vars
  AiOutlineCalendar,
} from "react-icons/ai";

// import SubTasks from "../../../components/task/taskDetails/subTask/SubTasksList";

import DetailsTitle from "./details/DetailsTitle";
import DetailsNotes from "./details/DetailsNotes";
// import DetailReminder from "../../../components/task/taskDetails/DetailReminder";
// import DetailsPriotiry from "../../../components/task/taskDetails/DetailsPriotiry";
// import { useTaskDetail } from "../../../contexts/TaskDetailContext";
import PropTypes from "prop-types";
import { useLoaderData, useNavigate } from "react-router";
import { Button } from "@material-tailwind/react";
import BackButton from "../../../components/buttons/BackButton";

MainInfoTask.propTypes = {
  dispatch: PropTypes.func,
};

function MainInfoTask() {
  const { data } = useLoaderData();
  const navigate = useNavigate();
  console.log(data);

  function confirmChanges() {
    navigate(-1);
  }

  //array of active options
  // const activeOption = optionList
  //   .filter((option) => option.isActive)
  //   .map((option) => option.name);

  // check if all options are active - if yes, set width of section MainInfo to 100% else 80% (to show buttons with options)
  // const width = activeOption.length === optionList.length ? "w-full" : "w-4/5";
  const width = "w-full";

  return (
    <div className={width}>
      <>
        {/* Display status & name of task */}
        <DetailsTitle />
        {/* Section of notes */}
        <DetailsNotes />
        {/* Component of reminder option*/}
        {/* {activeOption.includes("reminder") && <DetailReminder />} */}
        {/* Component of reminder priority*/}
        {/* {activeOption.includes("priority") && <DetailsPriotiry />} */}
        {/* Component of reminder subTask*/}
        {/* {activeOption.includes("subTasks") && <SubTasks />} */}
      </>

      <>
        <Button
          className="mr-1 bg-wedgewood-400 hover:bg-wedgewood-500 "
          onClick={confirmChanges}
          size="md"
        >
          <span>Confirm</span>
        </Button>
        <BackButton size="md">Cancel</BackButton>
      </>
    </div>
  );
}

export default MainInfoTask;
