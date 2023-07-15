import { useLoaderData } from "react-router";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem.jsx";
import NewTaskForm from "../newTask/NewTaskForm.jsx";

TaskListPage.propTypes = {
  showCompleted: PropTypes.bool,
};

function TaskListPage({ showCompleted = false }) {
  const { data: tasksList } = useLoaderData();

  return (
    <>
      <section className="flex h-[calc(100dvh-50px)] flex-col overflow-scroll bg-background pt-8">
        <>
          {!showCompleted ? <NewTaskForm /> : null}

          {tasksList.map((task) => (
            <TaskItem key={crypto.randomUUID()} task={task} />
          ))}
        </>
      </section>
    </>
  );
}

export default TaskListPage;
