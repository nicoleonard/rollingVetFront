import React from "react";
import "../../App.css";
import Bayon from "../../assets/Bayon.jpeg";
import Bonnie from "../../assets/Bonnie.jpg";
import Mumu from "../../assets/Mumu.jpeg";
import Shura from "../../assets/Shura.jpeg";
import Yoruichi from "../../assets/Yoruichi.jpeg";

const Nosotros = () => {
  return (
    <section className="container mainSection fondo fondoSinImagen fuente">
      <section className="nosotros text-center py-3 my-3">
        <h1>Nosotros</h1>
        <p className="ps-4 pe-4">
          Somos un grupo de estudiantes de Rolling Code unidos para crear una
          hermosa página web para una veterinaria, donde los amantes de las
          mascotas pueden encontrar información sobre servicios de calidad,
          expertos veterinarios y una experiencia en línea excepcional para
          cuidar y mimar a sus adorables compañeros peludos.
        </p>
      </section>
      <section className="container">
        <article className="row">
          <aside className="contenedor-recuadro col-sm-6 col-md-6 col-lg-6 mb-3">
            <img src={Bayon} alt="Nico Leonard" width="100%" className="imagen-centrada my-4" />
          </aside>
          <aside className="col-sm-6 col-md-6 col-lg-6 my-4">
            <h5>Nombre:</h5>
            <p>Nicolas Leonard</p>
            <h5>Puesto:</h5>
            <p>Scrum Master / fullstak developer</p>
            <h5>GitHub</h5>
            <p className="no-link-style"><a href="https://github.com/nicoleonard" target="_blank">💻Nicolas Leonard💻</a>
</p> 
            <h5>LinkedIn:</h5>
            <p className="no-link-style"><a href="https://www.linkedin.com/in/nicolas-leonard-b94359246/" target="_blank">👨‍💻nicoleonard👨‍💻</a>
</p> 
          </aside>
          <hr />
          <aside className="contenedor-recuadro col-sm-6 col-md-6 col-lg-6 mb-3">
            <img src={Mumu} alt="Facundo Cajal" width="100%" className="imagen-centrada my-4" />
          </aside>
          <aside className="col-sm-6 col-md-6 col-lg-6 my-4">
            <h5>Nombre:</h5>
            <p>Facundo Cajal</p>
            <h5>Puesto:</h5>
            <p>Fullstak developer</p>
            <h5>GitHub</h5>
            <p className="no-link-style"><a href="https://github.com/FacundoCajal199" target="_blank">💻Facund05💻</a>
</p> 
            <h5>LinkedIn:</h5>
            <p className="no-link-style"><a href="https://www.linkedin.com/in/facundo-cajal-051616214/" target="_blank">👨‍💻Facundo Cajal👨‍💻</a>
</p> 
          </aside>
          <hr />{" "}
          <aside className="contenedor-recuadro col-sm-6 col-md-6 col-lg-6 mb-3" >
            <img src={Yoruichi} alt="Matias Giacobbe" width="100%" className="imagen-centrada my-4" />
          </aside>
          <aside className="col-sm-6 col-md-6 col-lg-6 my-4">
            <h5>Nombre:</h5>
            <p>Matias Giacobbe</p>
            <h5>Puesto:</h5>
            <p>Fullstak developer</p>
            <h5>GitHub</h5>
            <p className="no-link-style"><a href="https://github.com/MtAgia" target="_blank">💻MtAgia💻</a>
</p> 
            <h5>LinkedIn:</h5>
            <p className="no-link-style"><a href="https://www.linkedin.com/in/matias-giacobbe-bbb250276/" target="_blank">👨‍💻Matias Giacobbe👨‍💻</a>
</p> 
          </aside>
          <hr />{" "}
          <aside className="contenedor-recuadro col-sm-6 col-md-6 col-lg-6 mb-3">
            <img src={Shura} alt="Santiago Antich" width="100%" className="imagen-centrada my-4" />
          </aside>
          <aside className="col-sm-6 col-md-6 col-lg-6 my-4">
            <h5>Nombre:</h5>
            <p>Santiago Antich</p>
            <h5>Puesto:</h5>
            <p>Fullstak developer</p>
            <h5>GitHub</h5>
            <p className="no-link-style"><a href="https://github.com/antich98" target="_blank">💻antich98💻</a>
</p> 
            <h5>LinkedIn:</h5>
            <p className="no-link-style"><a href="https://www.linkedin.com/in/santiago-antich/" target="_blank">👨‍💻Santiago Antich Llarull👨‍💻</a>
</p> 
          </aside>
          <hr />{" "}
          <aside className="contenedor-recuadro col-sm-6 col-md-6 col-lg-6 mb-3">
            <img src={Bonnie} alt="Laura Rota" width="100%" className="imagen-centrada my-4" />
          </aside>
          <aside className="col-sm-6 col-md-6 col-lg-6 my-4">
            <h5>Nombre:</h5>
            <p>Laura Rota</p>
            <h5>Puesto:</h5>
            <p>Fullstak developer</p>
            <h5>GitHub</h5>
            <p className="no-link-style"><a href="https://github.com/RLauraS" target="_blank">💻RLauraS💻</a>
</p> 
            <h5>LinkedIn:</h5>
            <p className="no-link-style"><a href="https://www.linkedin.com/in/laura-rota-51699b243/" target="_blank">👨‍💻Laura Rota👨‍💻</a>
</p> 
          </aside>
        </article>
      </section>
    </section>
  );
};

export default Nosotros;
