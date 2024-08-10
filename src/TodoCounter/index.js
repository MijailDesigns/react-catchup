import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/index";

function TodoCounter() {
  const { completedTodos: completed, totalTodos: total } =
    React.useContext(TodoContext);

  return completed && completed === total ? (
    <h1 className="TodoCounter">Felicidades haz completado tus TODOs</h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
