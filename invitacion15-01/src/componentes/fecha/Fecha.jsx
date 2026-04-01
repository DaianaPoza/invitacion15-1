import './Fecha.css';
import { QUINCE } from '../../config/QuinceConfig';

function Fecha() {
  const fecha = new Date(QUINCE.fechaISO);

  const dia = fecha.getDate().toString().padStart(2, '0');
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  const anio = fecha.getFullYear();
  const hora = fecha.getHours();

  return (
    <section className="seccionfecha">
      <div className="fechacontenido">
        <h2>Fecha</h2>

        <p className="fecha-numero">
          {dia} · {mes} · {anio}
        </p>

        <p className="fecha-hora">
          {hora} hs
        </p>
      </div>
    </section>
  );
}

export default Fecha;