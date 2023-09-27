import "./SearchHeader.css";
import logo_1 from "../assets/logo_1.png";

export const Title = () => {
  return (
    <div className="container">
      <h3>Welcome to the talent search portal</h3>
      <p>
      Your next great talent discovery is just a click away. Start your search now and find the talent that will boost your company to success.
      </p>
      <img src={logo_1} alt="Logo de la aplicación" className="logo_1" />
    </div>
  );
};
