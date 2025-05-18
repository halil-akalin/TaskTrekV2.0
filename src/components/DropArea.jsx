import React, { useState } from "react";
import "./DropArea.css";

const DropArea = ({ onDrop, theme }) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={(e) => {
        e.preventDefault(); // Tarayıcı varsayılan davranışını engelle
        onDrop(); // onDrop fonksiyonunu çağır
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={`${showDrop ? "drop_area" : "hide_drop"} ${theme}`}
    >
      Sürükleyip bırakın
    </section>
  );
};

export default DropArea;
