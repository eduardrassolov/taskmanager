import { Outlet } from "react-router-dom";
import TaskInfo from "./TaskInfo";
import BackButton from "../../../components/buttons/BackButton";
import { CurTaskProvider } from "./CurTaskContext";
import Header from "../../../components/Header";

function TaskInfoPage() {
  return (
    <>
      <Outlet />
      <CurTaskProvider>
        <section className="h-[calc(100dvh-50px)] w-full overflow-scroll bg-background pb-5">
          <div className="mx-auto min-w-[350px] max-w-[500px] bg-gray-50 p-4">
            <BackButton size="sm">Go Back</BackButton>
            <Header>Edit Task</Header>
            <TaskInfo />
          </div>
        </section>
      </CurTaskProvider>
    </>
  );
}

export default TaskInfoPage;
