import { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineProfile,
} from "react-icons/ai";
import PropTypes from "prop-types";
import { Input } from "@material-tailwind/react";
import { useTaskDetail } from "../../../contexts/TaskDetailContext";

DetailsTitle.propTypes = {
  task: PropTypes.object,
};

// TODO: refactor code down
function DetailsTitle({ task }) {
  const { selectedTask } = useTaskDetail();
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <section className="mb-5 flex items-center justify-between">
        <div className="flex items-center">
          <AiOutlineProfile size={"1.5rem"} />
          <input
            defaultChecked={selectedTask.isCompleted.status}
            type="checkbox"
            id={selectedTask._id}
            className="mx-3 h-5 w-5 cursor-pointer rounded-full text-wedgewood-500 shadow hover:bg-wedgewood-300 focus:ring-current"
          />
          {isEdit ? (
            <Input label="Edit title" type="text" />
          ) : (
            <h3 className="focus:border-none">{selectedTask.title}</h3>
          )}
        </div>

        {/* TODO refactor to component repeat same in DetailsTitle */}
        <div className="flex items-center gap-3">
          {isEdit ? (
            <>
              <AiOutlineCheckCircle
                className="cursor-pointer"
                size={"1.1rem"}
                onClick={() => setIsEdit(false)}
              />
              <AiOutlineClose
                className="cursor-pointer"
                onClick={() => setIsEdit(false)}
              />
            </>
          ) : (
            <>
              <AiOutlineEdit
                className={`${isEdit ? "hidden" : ""} cursor-pointer`}
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
