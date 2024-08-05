import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      onClick={onComplete}
      type="check"
      color={completed ? "green" : "gray"}
    />
  );
}

export { CompleteIcon };
