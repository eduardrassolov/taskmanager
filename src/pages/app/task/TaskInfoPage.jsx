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
        <section className="mx-2 mb-4 mt-4 max-w-xl bg-background sm:m-auto sm:mt-4">
          <Header>Edit Task</Header>
          <BackButton size="sm">Go Back</BackButton>
          <MainInfo />
        </section>
      </CurTaskProvider>
    </>
  );
}

export default TaskInfoPage;
