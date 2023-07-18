import { AiOutlineComment } from "react-icons/ai";
import { useUpdateTask } from "../CurTaskContext";

function DetailsNotes() {
  // const { editedTask, editField } = useTaskDetail();
  // const handleTextChange = ({ target }) => editField("notes", target.value);
  const { updTask, dispatch } = useUpdateTask();

  return (
    <div className="mb-5 flex flex-col pt-5">
      <div className="mb-2 flex w-full items-center">
        <AiOutlineComment size={"2rem"} />
        <h2 className="ml-1">Task notes:</h2>
      </div>

      <div className="w-full">
        <textarea
          label="Add your notes..."
          className="w-full resize-none rounded-lg text-base focus:ring-0"
          rows={3}
          defaultValue={updTask.notes || ""}
          onInput={({ target }) =>
            dispatch({ type: "notes", payload: target.value })
          }
        />
      </div>
    </div>
  );
}

export default DetailsNotes;
