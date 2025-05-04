import { useState } from "react";

export default ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="list-horizontal">
      <input
        type="radio"
        icon="🍞"
        checked={selectedCategory === "home"}
        onChange={() => setSelectedCategory("home")}
      />
      <input
        type="radio"
        icon="📑"
        checked={selectedCategory === "academia"}
        onChange={() => setSelectedCategory("academia")}
      />

      <input
        type="radio"
        icon="📕"
        checked={selectedCategory === "work"}
        onChange={() => setSelectedCategory("work")}
      />
    </aside>
  );
};
