import './Footer.css';
import video from '../../assets/videoblancoynegro.mp4'; // ajustá el nombre

function Footer() {
  return (
    <section className="footer">
      
      {/* VIDEO */}
      <video
        className="footer-video"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div className="footer-overlay" />

      {/* TEXTO */}
      <div className="footer-content">
        <p>
        Una noche para brillar, un recuerdo para siempre
        </p>
      </div>

    </section>
  );
}

export default Footer;