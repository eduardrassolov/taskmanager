import { AiOutlineComment } from "react-icons/ai";
import PropTypes from "prop-types";
import HeaderInfo from "./HeaderInfo";

DetailsNotes.propTypes = {
  task: PropTypes.object,
  dispatch: PropTypes.func,
  register: PropTypes.func,
};

function DetailsNotes({ task, register }) {
  return (
    <div className="mb-5 flex flex-col pt-5">
      <HeaderInfo IconComp={<AiOutlineComment size={"1.5rem"} />}>
        Task notes:
      </HeaderInfo>

      <div className="w-full">
        <textarea
          {...register("notes")}
          label="Add your notes..."
          className="w-full resize-none rounded-lg text-base focus:ring-0"
          rows={3}
          name="notes"
          defaultValue={task.notes || ""}
          // onInput={({ target }) =>
          //   dispatch({ type: "notes", payload: target.value })
          // }
        />
      </div>
    </div>
  );
}

export default DetailsNotes;
