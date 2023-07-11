/* eslint-disable no-unused-vars */
import {
  Form,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { useReducer, useState } from "react";
import Aside from "./AsideTask";
import MainInfo from "./MainInfo";
import { taskReducer as reducer } from "./taskReducer";
import BackButton from "../../../components/buttons/BackButton";
import { CurTaskProvider, useUpdateTask } from "./CurTaskContext";

const options = [
  { isActive: false, name: "reminder" },
  { isActive: false, name: "priority" },
  { isActive: false, name: "subTasks" },
];

function TaskInfoPage() {
  const navigate = useNavigate();
  const [optionList, setOptionList] = useState(options);

  const handleClicked = ({ target }) => {
    const name = target.name;
    setOptionList((prev) =>
      prev.map((option) =>
        option.name === name
          ? { ...option, isActive: !option.isActive }
          : option
      )
    );
  };
  function handleRemoveOption(name) {
    setOptionList((prev) =>
      prev.map((option) =>
        option.name === name ? { ...option, isActive: false } : option
      )
    );
  }

  return (
    <>
      <Outlet />
      <CurTaskProvider>
        <main className="sm:m-auto sm:mt-5 sm:w-[75%]">
          <BackButton size="sm">Go Back</BackButton>

          <section className="mt-4 flex h-full w-full ">
            <MainInfo />
            <Aside onClick={handleClicked} optionList={optionList} />
          </section>

          <Button
            className="mr-1 bg-wedgewood-400 hover:bg-wedgewood-500 "
            // onClick={() => navigate(-1)}
            size="md"
            type="submit"
          >
            <span>Confirm</span>
          </Button>
          <BackButton size="md">Cancel</BackButton>
        </main>
      </CurTaskProvider>
    </>
  );
}

export default TaskInfoPage;
