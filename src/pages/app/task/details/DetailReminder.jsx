import { AiOutlineCalendar } from "react-icons/ai";
import { useUpdateTask } from "../CurTaskContext";
import { useState } from "react";
import Toggle from "./Toggle";

function DetailReminder() {
  const { updTask, dispatch } = useUpdateTask();

  const handleReminderChange = ({ target }) =>
    dispatch({ type: "reminder", payload: target.value });

  console.log(updTask?.reminder);

  const [isDisabled, setDisabled] = useState(updTask?.reminder);

  const minDate = new Date().toISOString().slice(0, 16);

  function handleReminder() {
    console.log("change");
    dispatch({ type: "reminder", payload: null });
    setDisabled((prev) => !prev);
  }

  const reminderDate =
    updTask?.reminder && updTask.reminder
      ? new Date(updTask.reminder).toISOString().slice(0, 16)
      : "";
  console.log(reminderDate);

  return (
    <div className="mb-5 flex w-full flex-col items-center pt-5">
      <div className="mb-2 flex w-full items-center">
        <AiOutlineCalendar size={"2rem"} />
        <h2 className="ml-1">Add reminder:</h2>
      </div>
      <div className="flex w-full items-center justify-between">
        <input
          type="datetime-local"
          className=" mr-2 w-full rounded-xl focus:border-wedgewood-400 focus:ring-0 focus:ring-wedgewood-400 focus:ring-offset-0"
          onChange={handleReminderChange}
          value={reminderDate}
          disabled={!isDisabled}
          min={minDate}
        />

        <button
          onClick={handleReminder}
          className="text-wedgewood-500 hover:text-wedgewood-400"
        >
          {/* {isDisabled ? "Off" : "On"} */}
        </button>
        <Toggle status={isDisabled} onChange={handleReminder} />
      </div>
    </div>
  );
}

export default DetailReminder;
