import prof1 from "../../../assets/prof1.png";
import prof2 from "../../../assets/2.png";
import prof3 from "../../../assets/3.png";
import prof4 from "../../../assets/4.png";
import prof5 from "../../../assets/5.png";
import prof6 from "../../../assets/6.png";
import"../../../App.css"

function Profesionales() {
    return (
<section className="container nuestrosEspecialistas mb-3">
        <h2 className="mb-3 textoAntiqueWhite display-6">Nuestros Especialistas siempre a disposición</h2>
        <article className="galeria-nuestrosEspecialistas">
          <img src={prof1} alt="Cecilia Herrera" />
          <img src={prof2} alt="Ricardo Haro"/>
          <img src={prof3} alt="Agustin Paz" />
          <img src={prof4} alt="Valentin Forales" />
          <img src={prof5} alt="Carolina Sal" />
          <img src={prof6} alt="Estella Ruiz" />
        </article>
      </section>
    );
  }

export default Profesionales;