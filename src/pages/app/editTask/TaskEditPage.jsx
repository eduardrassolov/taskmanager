import { Outlet } from "react-router-dom";
import TaskInfo from "./TaskInfo";
import BackButton from "../../../components/buttons/BackButton";
import { CurTaskProvider } from "./CurTaskContext";

function TaskInfoPage() {
  return (
    <>
      <Outlet />
      <CurTaskProvider>
        <section className="h-[calc(100dvh-50px)] w-full overflow-scroll bg-background  pb-5 ">
          <div className="mx-auto min-w-[350px] max-w-[500px] bg-gray-50 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <BackButton size="sm">Go Back</BackButton>
            <h2 className={"text-center text-2xl"}>Edit Task</h2>
            <TaskInfo />
          </div>
        </section>
      </CurTaskProvider>
    </>
  );
}

export default TaskInfoPage;
