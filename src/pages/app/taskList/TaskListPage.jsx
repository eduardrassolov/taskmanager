import { useLoaderData } from "react-router";
import { useErrorBoundary } from "react-error-boundary";
import TaskItem from "./TaskItem.jsx";
import NewTaskForm from "../newTask/NewTaskForm.jsx";
import Header from "../../../components/Header.jsx";

function TaskListPage() {
  const { data: tasksList, error, status } = useLoaderData();
  const { showBoundary } = useErrorBoundary();

  return (
    <>
      {error ? showBoundary(error) : null}

      {tasksList?.length ? (
        <section className="h-[calc(100dvh-50px)] w-full overflow-scroll bg-background px-2 py-5">
          <div className="mx-auto min-w-[350px] max-w-[600px]">
            {status === "completed" ? null : <NewTaskForm />}
            <Header>{status}</Header>
            {tasksList?.map((task) => (
              <TaskItem key={task._id} task={task} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

export default TaskListPage;
