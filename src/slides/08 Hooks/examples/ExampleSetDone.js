function markTaskAsDone(item) {
  setTasks(
    tasks.map((task) => {
      if (task !== item) return task;
      return {
        ...task,
        completed: true,
      };
    }),
  );
}
