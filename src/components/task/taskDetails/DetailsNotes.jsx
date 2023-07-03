import { Textarea } from "@material-tailwind/react";
import { AiOutlineComment } from "react-icons/ai";

import { useTaskDetail } from "../../../contexts/TaskDetailContext";

function DetailsNotes() {
  const { editedTask, editField } = useTaskDetail();

  const handleTextChange = ({ target }) => editField("notes", target.value);

  return (
    <section className="mb-5 flex">
      <AiOutlineComment size={"1.5rem"} />

      <div className="mx-3 w-full">
        <h3 className="mb-2">notes</h3>
        <Textarea
          color="teal"
          label="Add your notes..."
          className="focus:ring-0"
          defaultValue={editedTask?.notes || ""}
          onInput={handleTextChange}
        />
      </div>
    </section>
  );
}

export default DetailsNotes;
