import { Container } from "react-bootstrap";

const ReviewClientes = () => {
  return (
    <Container className="contenedor-recuadro mb-3">
      <h2>Reseñas de clientes</h2>
      <hr />
      <h3 className="reviewNombre">Alfonso: </h3>
      <p>
        Esta es mi veterinaria favorita. Nunca tuve problemas y siempre
        atendieron a mi caniche en tiempo y forma
      </p>
      <h3 className="reviewNombre">Hilda: </h3>
      <p>
        El doctor Mariano es de lo mejor. El operó a mi perro y me dio mucha seguridad.
      </p>
      <h3 className="reviewNombre">Romina: </h3>
      <p>
        Precios muy baratos!!!
      </p>
    </Container>
  );
};

export default ReviewClientes;
