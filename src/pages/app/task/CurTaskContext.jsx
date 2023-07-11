import { createContext, useContext, useReducer } from "react";
import { useLoaderData } from "react-router";

const CurTaskContext = createContext();

// eslint-disable-next-line react/prop-types
function CurTaskProvider({ children }) {
  const { data: currentTask } = useLoaderData();
  const [updTask, dispatch] = useReducer(reducer, { ...currentTask });
  console.log("UPD TASK", updTask);
  return (
    <>
      <CurTaskContext.Provider value={{ currentTask, updTask, dispatch }}>
        {children}
      </CurTaskContext.Provider>
    </>
  );
}

function useUpdateTask() {
  const context = useContext(CurTaskContext);
  if (context === undefined) {
    throw new Error("useTask must be used within a CurTaskProvider");
  }
  return context;
}

function reducer(state, action) {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "notes":
      return { ...state, notes: action.payload };
    case "reset":
      return { ...action.payload };

    default:
      throw new Error("Invalid action type");
  }
}

export { CurTaskProvider, useUpdateTask };
