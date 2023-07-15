/* eslint-disable no-case-declarations */
import { redirect } from "react-router";
import { controller } from "../taskList/taskController";

export async function action({ request }) {
  const form = await request.formData();

  switch (request.method) {
    case "POST":
      console.log("post");
      try {
        const title = form.get("title");

        const { data } = await controller.addNewTask(title);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      break;
    case "DELETE":
      const id = form.get("taskId");
      await controller.deleteTask(id);
      break;
    default:
      return redirect("/app");
  }
  return redirect("/app");
}
