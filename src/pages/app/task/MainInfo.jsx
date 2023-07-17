/* eslint-disable no-unused-vars */
import {
  // eslint-disable-next-line no-unused-vars
  AiOutlineCalendar,
} from "react-icons/ai";

import DetailsTitle from "./details/DetailsTitle";
import DetailsNotes from "./details/DetailsNotes";
import DetailReminder from "./details/DetailReminder";
import DetailsPriotiry from "./details/DetailsPriotiry";
import SubTasksList from "./details/subTask/SubTasksList";

import { useUpdateTask } from "./CurTaskContext";
import { controller } from "../taskList/taskController";
import { useNavigate, useParams } from "react-router";
import Button from "../../../components/buttons/Button";
import { Form } from "react-router-dom";

//TODO refactor with reusable components 'DetailsTitle', 'DetailsNotes', 'DetailReminder', 'DetailsPriotiry', 'SubTasksList'

//TODO compare passing props to details components with taking props inside components
function MainInfoTask() {
  const { updTask, dispatch } = useUpdateTask();
  const { id: selectedId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    // console.log("test", updTask);
    // await controller.updateTask(selectedId, { ...updTask });
    // navigate("/app");
  };
  return (
    <div className="mt-5 divide-y-2 ">
      <Form onSubmit={handleSubmit}>
        {/* Display status & name of task */}
        <DetailsTitle task={updTask} dispatch={dispatch} />
        {/* Section of notes */}
        <DetailsNotes />
        {/* Component of reminder option*/}
        <DetailReminder />
        {/* Component of priority*/}
        <DetailsPriotiry />
        {/* Component of subTask*/}
        <SubTasksList />

        <div className="flex justify-end pt-5">
          <Button
            className="mr-1 bg-wedgewood-400 hover:bg-wedgewood-500 "
            // onClick={confirmChanges}
            size="sm"
            // onClick={handleSubmit}
            type="submit"
          >
            Confirm
          </Button>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default MainInfoTask;
