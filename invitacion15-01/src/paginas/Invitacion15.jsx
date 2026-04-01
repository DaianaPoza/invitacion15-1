import Header from "../componentes/header/Header";
import MusicPlayer from "../componentes/music/MusicPlayer";
import Fecha from "../componentes/fecha/Fecha.jsx";
import Cuentaregresiva from "../componentes/cuentaregresiva/Cuentaregresiva.jsx";
import Map from "../componentes/map/Map.jsx";
import Regalo from "../componentes/regalo/Regalo.jsx";
import Confirmacion from "../componentes/confirmacion/Confirmacion.jsx";
import Footer from "../componentes/footer/Footer.jsx";
import RevealOnScroll from "../componentes/reveal/RevealOnScroll.jsx";

/*  
import Seccion from "../componentes/seccion/Seccion";
import Vestimenta from "../componentes/vestimenta/Vestimenta";

      <Seccion />
      <Vestimenta />
      <Regalo />

<RevealOnScroll> 
         <Musica />
        <Cardheader />
        </RevealOnScroll>


*/

function Invitacion15() {
  return (
    <>
    <RevealOnScroll> 
      {/* 👉 CONTROL DE MÚSICA */}
      <MusicPlayer />
      {/* 👉 RESTO DE LA INVITACIÓN */}
      <Header />
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
      <Fecha />
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
      <Cuentaregresiva />
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
      <Map />
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
      <Regalo />
      </RevealOnScroll>
     

      <RevealOnScroll delay={100}>
<Confirmacion />
</RevealOnScroll>

<RevealOnScroll delay={100}>
 <Footer />
 </RevealOnScroll>


    </>
  );
}

export default Invitacion15;