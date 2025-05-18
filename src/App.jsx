import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    console.log("Theme updated to:", theme); // Hata ayıklama için log
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      console.log("Toggling theme to:", newTheme); // Hata ayıklama için log
      return newTheme;
    });
  };

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is going to place into ${status} and at the position ${position}`
    );

    if (activeCard == null || activeCard === undefined) return;
    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updatedTasks);
  };

  return (
    <div className={`app ${theme}`}>
      <TaskForm setTasks={setTasks} theme={theme} toggleTheme={toggleTheme} />
      <main className="app_main">
        <div className="header-title">
          <h1 className={`app_title ${theme}`}>Görevleriniz</h1>
        </div>
        <div className="task-columns">
          <TaskColumn
            title="Yapılacaklar"
            icon={todoIcon}
            tasks={tasks}
            status="todo"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
            theme={theme}
          />
          <TaskColumn
            title="Yapılıyor"
            icon={doingIcon}
            tasks={tasks}
            status="doing"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
            theme={theme}
          />
          <TaskColumn
            title="Tamamlandı"
            icon={doneIcon}
            tasks={tasks}
            status="done"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
            theme={theme}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
