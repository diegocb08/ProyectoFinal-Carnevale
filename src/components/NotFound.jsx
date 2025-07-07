import "./NotFound.css"; // Puedes crear este archivo CSS para estilos si quieres

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>¡Oops! Parece que la página que buscas no existe.</p>
      <p>
        Puedes regresar a la <a href="/">página principal</a>.
      </p>
    </div>
  );
}

export default NotFound;
