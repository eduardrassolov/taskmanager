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
import { Form, useSubmit } from "react-router-dom";
import { useForm } from "react-hook-form";

//TODO refactor with reusable components 'DetailsTitle', 'DetailsNotes', 'DetailReminder', 'DetailsPriotiry', 'SubTasksList'

//TODO compare passing props to details components with taking props inside components
function TaskInfo() {
  const navigate = useNavigate();
  const { updTask } = useUpdateTask();
  const { id } = useParams();
  const submit = useSubmit();

  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: {
      isCompleted: updTask?.isCompleted || false,
      title: updTask?.title,
      notes: updTask?.notes,
      reminder: updTask.reminder
        ? new Date(updTask?.reminder).toISOString().slice(0, 16)
        : null,
      priority: updTask?.priority,
      subTasks: updTask?.subTasks,
    },
  });
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

  const onSubmit = async (data) => {
    await controller.updateTask(id, data);
    console.log("data", data);
    navigate(-1);
  };
  return (
    <div className="mt-5 ">
      <h2 className="my-2 text-left text-sm text-gray-700">
        Created: {formatedDate}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="divide-gray divide-y-2"
      >
        <DetailsTitle register={register} task={updTask} />
        <DetailsNotes register={register} task={updTask} />
        <DetailReminder register={register} task={updTask} onReset={setValue} />
        <DetailsPriotiry register={register} task={updTask} />

        <SubTasksList
          register={register}
          control={control}
          setValue={setValue}
          task={updTask}
        />

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
      </form>
    </div>
  );
}

export default TaskInfo;
