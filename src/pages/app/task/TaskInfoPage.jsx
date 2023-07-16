import { Outlet } from "react-router-dom";
import MainInfo from "./MainInfo";
import BackButton from "../../../components/buttons/BackButton";
import { CurTaskProvider } from "./CurTaskContext";
import Header from "../../../components/Header";

function TaskInfoPage() {
  return (
    <>
      <Outlet />
      <CurTaskProvider>
        <section className="h-[calc(100dvh-50px)] w-full overflow-scroll bg-background pb-5">
          <div className="mx-auto min-w-[350px] max-w-[600px] p-4">
            <BackButton size="sm">Go Back</BackButton>
            <Header>Edit Task</Header>
            <MainInfo />
          </div>
        </section>
      </CurTaskProvider>
    </>
  );
}

export default TaskInfoPage;
