/* eslint-disable no-case-declarations */
import { controller } from "./taskController.js";

export async function taskAction({ request }) {
  const form = await request.formData();
  const id = form.get("taskId");

  switch (request.method) {
    case "PUT":
      return await controller.completeTask(id);
    case "DELETE":
      return await controller.deleteTask(id);
    default:
      return null;
  }
}
