import './Confirmacion.css';
import { QUINCE } from '../../config/QuinceConfig';

function Confirmacion() {
  const { titulo, tallyUrl } = QUINCE.confirmacion;

  return (
    <section className="seccionconfirmacion">
      <div className="confirmacioncontenido">
        <h2>{titulo}</h2>

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
      </div>
    </section>
  );
}

export default Confirmacion;