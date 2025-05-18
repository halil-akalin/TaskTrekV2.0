import React from "react";
import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
  theme,
}) => {
  return (
    <section className={`task_column ${theme}`}>
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h2>
      <hr className="line_hr" />

      <DropArea onDrop={() => onDrop(status, 0)} theme={theme} />

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <React.Fragment key={index}>
              <TaskCard
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
                theme={theme}
              />
              <DropArea
                onDrop={() => onDrop(status, index + 1)}
                theme={theme}
              />
            </React.Fragment>
          )
      )}
    </section>
  );
};

export default TaskColumn;
