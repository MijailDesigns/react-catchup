import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext/index";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const isDescriptionValid = newTodoValue.length >= 2;
  console.log(isDescriptionValid);

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    if (!isDescriptionValid) return;
    addTodo(newTodoValue);
    setNewTodoValue("");
  };

  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
    setNewTodoValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        placeholder="Corta cebolla para el almuerzo"
        onChange={(event) => {
          setNewTodoValue(event.target.value);
        }}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className={`TodoForm-button TodoForm-button--add ${
            isDescriptionValid ? "" : "disabled"
          }`}
          disabled={!isDescriptionValid}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
