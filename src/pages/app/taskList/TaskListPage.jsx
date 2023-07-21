import { useLoaderData } from "react-router";

import TaskItem from "./TaskItem.jsx";
import NewTaskForm from "../newTask/NewTaskForm.jsx";
import Header from "../../../components/Header.jsx";

function TaskListPage() {
  const { data: tasksList, status } = useLoaderData();

  console.log(status);
  return (
    <>
      <section className="h-[calc(100dvh-50px)] w-full overflow-scroll bg-background px-2 py-5">
        <div className="mx-auto min-w-[350px] max-w-[600px]">
          {status === "completed" ? null : <NewTaskForm />}
          <Header>{status}</Header>

          {tasksList?.map((task) => (
            <TaskItem key={crypto.randomUUID()} task={task} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TaskListPage;
