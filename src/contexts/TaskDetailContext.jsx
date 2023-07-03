import { createContext, useContext, useState } from "react";
import { useLoaderData } from "react-router";

const TaskDetailContext = createContext();

const options = [
  { isActive: false, name: "reminder" },
  { isActive: false, name: "priority" },
  { isActive: false, name: "subTasks" },
];

// eslint-disable-next-line react/prop-types
function TaskDetailProvider({ children }) {
  const { data: selectedTask, error } = useLoaderData();
  const [editedTask, setEditedTask] = useState({ ...selectedTask });

  const [optionList, setOptionList] = useState(options);

  function editField(fieldName, fieldValue) {
    setEditedTask((prev) => ({ ...prev, [fieldName]: fieldValue }));
  }

  const handleClickOption = ({ target }) =>
    setOptionList((prev) =>
      prev.map((option) =>
        option.name === target.name
          ? { ...option, isActive: !option.isActive }
          : option
      )
    );
  const handleRemoveOption = (name) =>
    setOptionList((prev) =>
      prev.map((option) =>
        option.name === name ? { ...option, isActive: false } : option
      )
    );

  console.log("temp task", editedTask);
  console.log("task", selectedTask);

  return (
    <TaskDetailContext.Provider
      value={{
        selectedTask,
        error,
        editField,
        optionList,
        handleClickOption,
        handleRemoveOption,
      }}
    >
      {children}
    </TaskDetailContext.Provider>
  );
}
function useTaskDetail() {
  const context = useContext(TaskDetailContext);
  return context;
}

export { TaskDetailProvider, useTaskDetail };
