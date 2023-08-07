import { Container } from "react-bootstrap";

const ReviewClientes = () => {
  return (
    <Container className="contenedor-recuadro mb-3 reviewClientes text-center my-2 w-100 mx-auto card bg-opacity-75 bg-success px-5">
      <Container className="textoAntiqueWhite">
      <h2 className="reviewNombre display-3"><b>Reseñas de clientes</b></h2>
      <hr />
      <h3><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><b> Alfonso: </b></h3>
      <p><b>
        Esta es mi veterinaria favorita. Nunca tuve problemas y siempre
        atendieron a mi caniche en tiempo y forma.
        </b>
      </p>
      <hr />
      <h3><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><b> Hilda: </b></h3>
      <p><b>
        El doctor Mariano es de lo mejor. El operó a mi perro y me dio mucha seguridad.
        </b></p>
        <hr />
      <h3><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i><i className="bi bi-star-fill mx-1"></i> <b>Romina: </b></h3>
      <p><b>
        ¡Precios muy baratos!
        </b></p>
        </Container>
    </Container>
  );
};

export default ReviewClientes;
