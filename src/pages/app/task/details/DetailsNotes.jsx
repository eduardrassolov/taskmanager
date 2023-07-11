import { Textarea } from "@material-tailwind/react";
import { AiOutlineComment } from "react-icons/ai";
import { useUpdateTask } from "../CurTaskContext";

function DetailsNotes() {
  // const { editedTask, editField } = useTaskDetail();
  // const handleTextChange = ({ target }) => editField("notes", target.value);
  const { updTask, dispatch } = useUpdateTask();

  return (
    <section className="mb-5 flex">
      <AiOutlineComment size={"1.5rem"} />

      <div className="ml-3 w-full">
        <h3 className="mb-2">notes</h3>
        <Textarea
          color="teal"
          label="Add your notes..."
          className="focus:ring-0"
          defaultValue={updTask.notes || ""}
          onInput={({ target }) =>
            dispatch({ type: "notes", payload: target.value })
          }
        />
      </div>
    </section>
  );
}

export default DetailsNotes;
