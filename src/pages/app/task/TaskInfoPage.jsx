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
        <section className="mt-5 border-red-100 ring-1 sm:m-auto sm:w-[50%]">
          <BackButton size="sm">Go Back</BackButton>
          <MainInfo />
        </section>
      </CurTaskProvider>
    </>
  );
}

export default TaskInfoPage;
