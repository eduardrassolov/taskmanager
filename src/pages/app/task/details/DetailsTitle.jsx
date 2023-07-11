import { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineProfile,
} from "react-icons/ai";
import { Input } from "@material-tailwind/react";
import { useUpdateTask } from "../CurTaskContext";

// TODO: refactor code down
function DetailsTitle() {
  const { updTask, dispatch } = useUpdateTask();

  const [tempTitle, setTemp] = useState(updTask.title);
  const [isEditMode, setIsEdit] = useState(false);

  function handleCloseEdit() {
    setTemp(updTask.title);
    setIsEdit((prev) => !prev);
  }
  function handleConfirm() {
    if (!tempTitle.trim()) return;
    setIsEdit((prev) => !prev);
    dispatch({ type: "title", payload: tempTitle });
  }

  return (
    <>
      <section className="mb-5 flex items-center justify-between">
        <div className="flex items-center">
          <AiOutlineProfile size={"1.5rem"} />
          <input
            defaultChecked={updTask?.isCompleted?.status}
            type="checkbox"
            id={updTask._id}
            className="mx-3 h-5 w-5 cursor-pointer rounded-full text-wedgewood-500 shadow hover:bg-wedgewood-300 focus:ring-current"
          />

          {isEditMode ? (
            <Input
              label="Edit title"
              type="text"
              onInput={({ target }) => setTemp(target.value)}
              value={tempTitle}
            />
          ) : (
            <h3 className="focus:border-none">{updTask.title}</h3>
          )}
        </div>

        {/* TODO refactor to component repeat same in DetailsTitle */}
        <div className="flex items-center gap-3">
          {isEditMode ? (
            <>
              <AiOutlineCheckCircle
                className="cursor-pointer"
                size={"1.1rem"}
                onClick={handleConfirm}
              />
              <AiOutlineClose
                className="cursor-pointer"
                onClick={handleCloseEdit}
              />
            </>
          ) : (
            <>
              <AiOutlineEdit
                className={`${isEditMode ? "hidden" : ""} cursor-pointer`}
                size={"1.2rem"}
                onClick={() => {
                  setIsEdit(true);
                }}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default DetailsTitle;
