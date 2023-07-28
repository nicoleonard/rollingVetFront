import React from "react";
import "../../App.css";
import Bayon from "../../assets/Bayon.jpeg";
import Bella from "../../assets/Bella.jpeg";
import Bonnie from "../../assets/Bonnie.jpeg";
import Mumu from "../../assets/Mumu.jpeg";
import Shura from "../../assets/Shura.jpeg";
import Yoruichi from "../../assets/Yoruichi.jpeg";

const Nosotros = () => {
  return (
    <section className="container mainSection fondo fondoSinImagen fuente">
      <section className="text-center py-3">
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
          <aside className="col-sm-6 col-md-6 col-lg-6">
            <img src={Bayon} alt="Nico Leonard" width="100%" className="my-4" />
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
          <aside className="col-sm-6 col-md-6 col-lg-6">
            <img src={Mumu} alt="" width="100%" className="my-4" />
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
          <hr />{" "}
          <aside className="col-sm-6 col-md-6 col-lg-6">
            <img src={Yoruichi} alt="" width="100%" className="my-4" />
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
          <hr />{" "}
          <aside className="col-sm-6 col-md-6 col-lg-6">
            <img src={Shura} alt="" width="100%" className="my-4" />
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
          <hr />{" "}
          <aside className="col-sm-6 col-md-6 col-lg-6">
            <img src={Bonnie} alt="" width="100%" className="my-4" />
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
        </article>
      </section>
    </section>
  );
};

export default Nosotros;
