import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
import deleteIconDark from "../assets/trash-4-xxl white.png";

const TaskCard = ({
  title,
  tags,
  handleDelete,
  index,
  setActiveCard,
  theme,
}) => {
  return (
    <article
      className={`task_card ${theme}`}
      draggable="true"
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} theme={theme} />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img
            src={theme === "light" ? deleteIcon : deleteIconDark}
            className="delete_icon"
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
