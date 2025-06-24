import { useEffect, useState } from 'react';

export function App() {
  const [tasks, setTasks] = useState([
    { completed: true, text: 'Write project proposal' },
    { completed: false, text: 'Fix login page bug' },
    { completed: false, text: 'Refactor header component' },
    { completed: true, text: 'Update README.md' },
    { completed: false, text: 'Review pull request #42' },
    { completed: true, text: 'Push latest changes to GitHub' },
  ]);

  useEffect(() => {
    alert('Tasks changed');
  }, [tasks]);

  return (
    <TaskList>
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          completed={task.completed}
          onChange={() => setTasks(updatedTasks)}
        />
      ))}
    </TaskList>
  );
}
