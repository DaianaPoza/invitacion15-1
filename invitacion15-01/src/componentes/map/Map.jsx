import './Map.css';
import { QUINCE } from '../../config/QuinceConfig';

function Map() {
  const nombreLugar = QUINCE.lugar.nombre;
  const direccionLugar = QUINCE.lugar.direccion;

  const { nombre, direccion, coordenadas } = QUINCE.lugar;

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${nombre}, ${direccion}`
)}&query_place_id=`;

  return (
    <section className="seccionmapa">
      <div className="mapacontenido">
        <h2>Lugar</h2>

        <p className="mapa-nombre">{nombreLugar}</p>
        <p className="mapa-direccion">{direccionLugar}</p>

        <a
          className="mapa-boton"
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver ubicación
        </a>
      </div>
    </section>
  );
}

export default Map;