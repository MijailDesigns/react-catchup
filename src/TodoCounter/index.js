import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return completedTodos && completedTodos === totalTodos ? (
    <h1 className="TodoCounter">Felicidades haz completado tus TODOs</h1>
  ) : (
    <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h1>
  );
}

export { TodoCounter };
