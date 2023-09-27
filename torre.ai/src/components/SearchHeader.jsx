import "./SearchHeader.css";
import logo_1 from "../assets/logo_1.png";

export const Title = () => {
  return (
    <div className="container">
      <h3>Bienvenido al Portal de Búsqueda de Talento</h3>
      <p>
        Tu próximo gran hallazgo está a solo un clic de distancia. Comienza tu
        búsqueda ahora mismo y encuentra el talento que impulsará tu empresa
        hacia el éxito.
      </p>
      <img src={logo_1} alt="Logo de la aplicación" className="logo_1" />
    </div>
  );
};
