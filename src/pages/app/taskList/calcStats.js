export function calcStats(tasks) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.isCompleted).length;
  const uncompleted = total - completed;
  const percentCompleted = Math.round((completed / total) * 100);
  const percentUncompleted = 100 - percentCompleted;

  return {
    total,
    completed,
    uncompleted,
    percentCompleted,
    percentUncompleted,
  };
}
