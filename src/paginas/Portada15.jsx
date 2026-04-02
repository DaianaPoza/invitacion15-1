import { useNavigate } from "react-router-dom";
import { useAudio } from "../context/AudioContextProvider";
import "./Portada15.css";

function Portada15() {
  const navigate = useNavigate();
  const { playAudio } = useAudio();

  const handleVerMas = async () => {
    await playAudio();
    navigate("/invitacion");
  };

  return (
    <section className="portada15">
      <div className="portada15__overlay">
        <h2 className="portada15__subtitulo">Te invito a celebrar</h2>
        <h1 className="portada15__titulo">Mis 15</h1>
        <button className="portada15__boton" onClick={handleVerMas}>
          Ingresar
        </button>
      </div>
    </section>
  );
}

export default Portada15;