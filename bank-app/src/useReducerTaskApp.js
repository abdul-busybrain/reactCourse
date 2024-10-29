import { useReducer } from "react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

function tasksReduder(tasks, action) {
  switch (action.type) {
    case "added":
      return [...tasks, { id: action.id, text: action.text, done: false }];
    case "changed":
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    case "deleted":
      return tasks.filter((task) => task.id !== action.id);

    default:
      throw new Error("Unknown action:", action.type);
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Update my VS Code", done: true },
  { id: 1, text: "Watch Sultan Abdulhamid Seried", done: false },
  { id: 2, text: "Complete my project design", done: false },
];

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReduder, initialTasks);

  function handleAddTask(text) {
    dispatch({ type: "added", id: nextId++, text: text });
  }

  function handleChangeTask(task) {
    dispatch({ type: "changed", task: task });
  }

  function handleDeleteTask(taskId) {
    dispatch({ type: "deleted", id: taskId });
  }

  return (
    <>
      <h1>Basic task App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
