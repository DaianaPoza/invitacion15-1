import './Regalo.css';
import { QUINCE } from '../../config/QuinceConfig';
import { useState } from 'react';
import { FaGift } from 'react-icons/fa';

function Regalo() {
  const { titulo, frase, alias, cbu } = QUINCE.regalos;

  const [mostrarAlias, setMostrarAlias] = useState(false);
  const [mostrarCbu, setMostrarCbu] = useState(false);
  const [copiado, setCopiado] = useState('');

  const copiarTexto = async (texto, tipo) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(tipo);

      setTimeout(() => {
        setCopiado('');
      }, 2000);
    } catch (error) {
      console.error('No se pudo copiar el texto:', error);
    }
  };

  return (
    <section className="seccionregalo">
      <div className="regalocontenido">
        <FaGift className="regalo-icono" />

        <h2>{titulo}</h2>
        <p className="regalo-frase">{frase}</p>

        <div className="regalo-acciones">
          <div className="regalo-item">
            <button
              type="button"
              className="regalo-toggle"
              onClick={() => {
                setMostrarAlias(!mostrarAlias);
                setMostrarCbu(false);
              }}
            >
              Alias
            </button>

            {mostrarAlias && (
              <div className="regalo-desplegable">
                <p>{alias}</p>
                <button
                  type="button"
                  className="regalo-copiar"
                  onClick={() => copiarTexto(alias, 'alias')}
                >
                  Copiar alias
                </button>
              </div>
            )}
          </div>

          <div className="regalo-item">
            <button
              type="button"
              className="regalo-toggle"
              onClick={() => {
                setMostrarCbu(!mostrarCbu);
                setMostrarAlias(false);
              }}
            >
              CBU
            </button>

            {mostrarCbu && (
              <div className="regalo-desplegable">
                <p>{cbu}</p>
                <button
                  type="button"
                  className="regalo-copiar"
                  onClick={() => copiarTexto(cbu, 'cbu')}
                >
                  Copiar CBU
                </button>
              </div>
            )}
          </div>
        </div>

        {copiado && (
          <span className="regalo-mensaje">
            {copiado === 'alias' ? 'Alias copiado' : 'CBU copiado'}
          </span>
        )}
      </div>
    </section>
  );
}

export default Regalo;