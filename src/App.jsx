import { RouterProvider } from "react-router-dom";
import { TasksProvider } from "./contexts/TasksContext.jsx";
import routing from "./routing.jsx";

function App() {
  return (
    <>
      <TasksProvider>
        <RouterProvider router={routing} />
      </TasksProvider>
    </>
  );
}

export default App;
