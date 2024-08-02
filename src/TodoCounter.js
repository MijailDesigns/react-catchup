import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return completed === total ? (
    <h1 className="TodoCounter">Felicidades haz completado tus TODOs</h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
