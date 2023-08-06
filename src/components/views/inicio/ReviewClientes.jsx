import { Container } from "react-bootstrap";

const ReviewClientes = () => {
  return (
    <Container className="contenedor-recuadro mb-3 reviewClientes">
      <h2 className="reviewNombre display-3"><b>Reseñas de clientes</b></h2>
      <hr />
      <h3><i className="bi bi-star-fill"></i><b> Alfonso: </b></h3>
      <p><b>
        Esta es mi veterinaria favorita. Nunca tuve problemas y siempre
        atendieron a mi caniche en tiempo y forma.
        </b>
      </p>
      <hr />
      <h3><b><i className="bi bi-star-fill"></i> Hilda: </b></h3>
      <p><b>
        El doctor Mariano es de lo mejor. El operó a mi perro y me dio mucha seguridad.
        </b></p>
        <hr />
      <h3><i className="bi bi-star-fill"></i> <b>Romina: </b></h3>
      <p><b>
        ¡Precios muy baratos!
        </b></p>
    </Container>
  );
};

export default ReviewClientes;
