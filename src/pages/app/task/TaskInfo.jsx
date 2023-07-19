/* eslint-disable no-unused-vars */
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
function TaskInfo() {
  const { updTask, dispatch } = useUpdateTask();

  const { id: selectedId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await controller.updateTask(selectedId, { ...updTask });
    navigate("/app");
  };

  const formatedDate = new Date(updTask?.timeCreated).toLocaleDateString(
    "en-GB",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }
  );
  return (
    <div className="mt-5 ">
      <h2 className="text-left text-sm">Created: {formatedDate}</h2>
      <Form onSubmit={handleSubmit} className="divide-gray divide-y-2">
        <DetailsTitle task={updTask} dispatch={dispatch} />
        <DetailsNotes />
        <DetailReminder />
        <DetailsPriotiry />
        <SubTasksList />

        <div className="flex justify-end pt-5">
          <Button
            className="mr-1 bg-wedgewood-400 hover:bg-wedgewood-500 "
            size="sm"
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

export default TaskInfo;
