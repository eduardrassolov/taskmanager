import { useLoaderData } from "react-router";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem.jsx";
import NewTaskForm from "../newTask/NewTaskForm.jsx";
import Header from "../../../components/Header.jsx";

TaskListPage.propTypes = {
  showCompleted: PropTypes.bool,
};

function TaskListPage({ showCompleted = false }) {
  const { data: tasksList } = useLoaderData();
  console.log(tasksList);

  return (
    <>
      <section className="h-[calc(100dvh-50px)] w-full overflow-scroll bg-background px-2 py-5">
        <div className="mx-auto min-w-[350px] max-w-[600px]">
          {!showCompleted ? <NewTaskForm /> : <Header>Completed Tasks</Header>}

          {tasksList.map((task) => (
            <TaskItem key={crypto.randomUUID()} task={task} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TaskListPage;
