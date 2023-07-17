/* eslint-disable react/prop-types */
import { MdPriorityHigh } from "react-icons/md";
import Bage from "./Bage";
import { PiBellRinging } from "react-icons/pi";
import { GrTree } from "react-icons/gr";

const formatDate = (date) => {
  const options = {
    day: "numeric",
    month: "long",
  };
  return new Date(date).toLocaleString("en-GB", options);
};

// eslint-disable-next-line react/prop-types
function BageList({ task }) {
  const { priority, reminder, subTasks } = task;

  return (
    <div className="mx-5 mt-1 flex">
      {priority !== "No priority" && (
        <Bage color={"blue"}>
          <MdPriorityHigh size={"0.8rem"} />
          {priority}
        </Bage>
      )}
      {reminder && (
        <Bage color={"red"}>
          <PiBellRinging size={"0.8rem"} />
          {formatDate(reminder)}
        </Bage>
      )}
      {subTasks.length > 0 && (
        <Bage color={"green"}>
          <GrTree size={"0.8rem"} />
          Subtasks
        </Bage>
      )}
    </div>
  );
}

export default BageList;
