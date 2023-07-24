import { PiBellRinging } from "react-icons/pi";
import { useState } from "react";
import PropTypes from "prop-types";
import Toggle from "./Toggle";
import HeaderInfo from "./HeaderInfo";

DetailReminder.propTypes = {
  register: PropTypes.func,
  task: PropTypes.object,
};

function DetailReminder({ register, task }) {
  const [isDisabled, setDisabled] = useState(task?.reminder);

  const minDate = new Date().toISOString().slice(0, 16);

  function handleReminder() {
    setDisabled((prev) => !prev);
  }

  const reminderDate = task?.reminder
    ? new Date(task.reminder).toISOString().slice(0, 16)
    : "";
  console.log(reminderDate);

  return (
    <div className="mb-5 flex w-full flex-col items-center pt-5">
      <HeaderInfo IconComp={<PiBellRinging size={"1.5rem"} />}>
        Reminder:
      </HeaderInfo>

      <div className="flex w-full items-center justify-between">
        <input
          {...register("reminder")}
          defaultValue={new Date(task.reminder)}
          type="datetime-local"
          className=" mr-2 w-full rounded-xl focus:ring-0 focus:ring-offset-0 disabled:text-gray-400"
          disabled={!isDisabled}
          min={minDate}
          required={isDisabled}
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
