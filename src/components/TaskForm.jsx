import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";
import logo from "../assets/logo.png";
import lightModeIcon from "../assets/light.png";
import darkModeIcon from "../assets/dark.png";

const TaskForm = ({ setTasks, theme, toggleTheme }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
    // Diyelim ki iki input (title ve description) aynı anda değişiyor:
    // Doğrudan taskData kullanırsanız, biri diğerini ezebilir.
    // prev ile her güncelleme, önceki state'in üzerine inşa edilir, böylece veri kaybı olmaz.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className={`app_header ${theme}`}>
      <div className="brand_item">
        <img src={logo} alt="brand" className="brand_icon" />
        {/* <h1 className="brand_name">Plando</h1> */}
        <h1 className={`brand_name ${theme}`}>Plando</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <input
            type="text"
            name="task"
            placeholder="Görev Giriniz..."
            className="task_input"
            onChange={handleChange}
            value={taskData.task}
          />
          <div className="theme-toggle-wrapper"></div>
        </div>
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="Çok Önemli"
              selectTag={selectTag}
              selected={checkTag("Çok Önemli")}
              theme={theme}
            />
            <Tag
              tagName="Önemli"
              selectTag={selectTag}
              selected={checkTag("Önemli")}
              theme={theme}
            />
            <Tag
              tagName="Öncelikli"
              selectTag={selectTag}
              selected={checkTag("Öncelikli")}
              theme={theme}
            />
            <Tag
              tagName="Varsayılan"
              selectTag={selectTag}
              selected={checkTag("Varsayılan")}
              theme={theme}
            />
          </div>

          <div className="task_form_buttons">
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">Yapılacaklar</option>
              <option value="doing">Yapılıyor</option>
              <option value="done">Tamamlandı</option>
            </select>

            <button type="submit" className="task_submit">
              + Görev Ekle
            </button>
          </div>
        </div>
      </form>
      <button
        type="button"
        className="task_submit"
        id="theme-toggle-btn"
        onClick={() => {
          toggleTheme();
          console.log(
            "Toggle Theme clicked, new theme:",
            theme === "light" ? "dark" : "light"
          );
        }}
      >
        <img
          src={theme === "light" ? darkModeIcon : lightModeIcon}
          alt="Theme Toggle"
          className="theme-icon"
        />
      </button>
    </header>
  );
};

export default TaskForm;
