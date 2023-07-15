import { AiOutlineCalendar } from "react-icons/ai";
import { useUpdateTask } from "../CurTaskContext";
import { useState } from "react";

function DetailReminder() {
  const { updTask, dispatch } = useUpdateTask();
  const handleReminderChange = ({ target }) =>
    dispatch({ type: "reminder", payload: target.value });

  const [isDisabled, setDisabled] = useState(false);
  const minDate = new Date().toISOString().slice(0, 16);
  function handleReminder() {
    dispatch({ type: "reminder", payload: null });
    setDisabled((prev) => !prev);
  }

  return (
    <div className="flex w-full items-center">
      <AiOutlineCalendar size={"1.5rem"} />

      <input
        type="datetime-local"
        className=" mx-3 w-full rounded-xl focus:border-wedgewood-400 focus:ring-0 focus:ring-wedgewood-400 focus:ring-offset-0"
        onChange={handleReminderChange}
        value={updTask?.reminder || ""}
        disabled={!isDisabled}
        min={minDate}
      />

      <button
        onClick={handleReminder}
        className="text-wedgewood-500 hover:text-wedgewood-400"
      >
        {isDisabled ? "Off" : "On"}
      </button>
    </div>
  );
}

export default DetailReminder;
