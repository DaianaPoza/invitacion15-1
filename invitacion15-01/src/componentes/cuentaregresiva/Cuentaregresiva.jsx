import './Cuentaregresiva.css';
import { QUINCE } from '../../config/QuinceConfig';
import { useEffect, useState } from 'react';

function Cuentaregresiva() {
  const calcularTiempoRestante = () => {
    const diferencia = new Date(QUINCE.fechaISO) - new Date();

    if (diferencia <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      };
    }

    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diferencia / (1000 * 60)) % 60),
      segundos: Math.floor((diferencia / 1000) % 60),
    };
  };

  const [tiempo, setTiempo] = useState(calcularTiempoRestante());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempoRestante());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="seccioncuenta">
      <div className="cuentacontenido">
        <h2>Cuenta regresiva</h2>
        <h3>Falta muy poquito para celebrar juntos</h3>

        <div className="contador">
          <div className="tiempo-box">
            <span>{tiempo.dias}</span>
            <p>Días</p>
          </div>

          <div className="tiempo-box">
            <span>{tiempo.horas}</span>
            <p>Horas</p>
          </div>

          <div className="tiempo-box">
            <span>{tiempo.minutos}</span>
            <p>Min</p>
          </div>

          <div className="tiempo-box">
            <span>{tiempo.segundos}</span>
            <p>Seg</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cuentaregresiva;