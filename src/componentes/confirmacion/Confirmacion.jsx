import { useEffect, useState } from "react";
import "./Confirmacion.css";
import { QUINCE } from "../../config/QuinceConfig";

function Confirmacion() {
  const { titulo, tallyUrl } = QUINCE.confirmacion;
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === "TALLY_FORM_SUBMITTED") {
        setEnviado(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <section className="seccionconfirmacion">
      <div className="confirmacioncontenido">
        <h2>{titulo}</h2>

        {!enviado ? (
          <div className="confirmacion-formulario">
            <iframe
              src={tallyUrl}
              title="Formulario de confirmación"
              loading="lazy"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Cargando…
            </iframe>
          </div>
        ) : (
          <div className="confirmacion-gracias">
            <p>¡Listo! El catering (y yo) te lo agradecemos. ¡Prepárate!</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Confirmacion;