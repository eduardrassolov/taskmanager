import { AiOutlineCalendar } from "react-icons/ai";
import OptionItem from "./OptionItem";
import PropTypes from "prop-types";
import { useTaskDetail } from "../../../contexts/TaskDetailContext";

DetailReminder.propTypes = {
  onRemoveOption: PropTypes.func,
};

function DetailReminder({ onRemoveOption }) {
  const { editField } = useTaskDetail();

  function handleReminderChange({ target }) {
    const date = target.value;
    editField("reminder", { isRemind: true, dateRemind: date });
  }
  return (
    <OptionItem name={"reminder"}>
      <AiOutlineCalendar size={"1.5rem"} />
      <input
        type="datetime-local"
        className=" mx-3 rounded-xl focus:border-wedgewood-400 focus:ring-0 focus:ring-wedgewood-400 focus:ring-offset-0"
        onChange={handleReminderChange}
      />
    </OptionItem>
  );
}

export default DetailReminder;
