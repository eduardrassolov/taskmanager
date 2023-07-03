import { useTasks } from "../../contexts/TasksContext";
import Header from "../Header";
import Loading from "../Loading";
import NewTaskForm from "./NewTaskForm";
import TaskItem from "./TaskItem";
import ProptTypes from "prop-types";

TaskListPage.propTypes = {
  completed: ProptTypes.bool,
};

function TaskListPage({ completed = false }) {
  const { tasksList, isLoading } = useTasks();

  return (
    <>
      {isLoading && <Loading />}

      {completed ? (
        <>
          <Header>Completed tasks</Header>
          <section className="mt-2 flex flex-col justify-center">
            {tasksList
              .filter((task) => task.isCompleted?.status)
              .map((task) => {
                return <TaskItem key={crypto.randomUUID()} task={task} />;
              })}
          </section>
        </>
      ) : (
        <>
          <NewTaskForm />
          <section className="mt-2 flex flex-col justify-center">
            {tasksList
              .filter((task) => !task.isCompleted?.status)
              .map((task) => {
                return <TaskItem key={crypto.randomUUID()} task={task} />;
              })}
          </section>
        </>
      )}
    </>
  );
}

export default TaskListPage;
