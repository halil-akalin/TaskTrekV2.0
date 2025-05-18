import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected, theme }) => {
  const tagStyle = {
    "Çok Önemli": {
      light: {
        backgroundColor: selected ? "#FFC4BD" : "#f9f9f9",
      },
      dark: { backgroundColor: selected ? "#FF6A57" : "#474747" },
    },
    Önemli: {
      light: { backgroundColor: selected ? "#B1FFE7" : "#f9f9f9" },
      dark: { backgroundColor: selected ? "#56AD92" : "#474747" },
    },
    Öncelikli: {
      light: { backgroundColor: selected ? "#B4C2FF" : "#f9f9f9" },
      dark: { backgroundColor: selected ? "#728BFF" : "#474747" },
    },
    Varsayılan: {
      light: { backgroundColor: selected ? "#FFD8B1" : "#f9f9f9" },
      dark: { backgroundColor: selected ? "#C97B2D" : "#474747" },
    },
    default: {
      light: { backgroundColor: "#f9f9f9" },
      dark: { backgroundColor: "#474747" },
    },
  };
  return (
    <button
      type="button"
      className={`tag ${theme}`}
      style={
        selected
          ? tagStyle[tagName]?.[theme] || tagStyle.default[theme]
          : tagStyle.default[theme]
      }
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
