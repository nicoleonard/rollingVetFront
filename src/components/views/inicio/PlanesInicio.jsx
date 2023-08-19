import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PlanesInicio = () => {
  return (
    <Container className="text-center my-2 w-100 mx-auto card bg-opacity-75 bg-success px-5">
      <h2 className="display-5 textoAntiqueWhite mt-3">Elige una de nuestras membresías</h2>
      <h3 className="textoAntiqueWhite">La mejor atención para tu mascota</h3>
      <hr />
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col>
            <Card style={{ width: "18rem" }} className="mx-auto mb-3 d-flex">
              <Card.Body className="fondoVerdeOscuro text-center">
                <Card.Title>
                  <div className="textoAntiqueWhite text-decoration-underline">
                    Primeros pasos
                  </div>
                </Card.Title>
                <Card.Text className="textoAntiqueWhite">
                  Servicios para mascotas de 0 a 5 años.
                </Card.Text>
                <Button as={Link} to="/contacto" variant="success">
                  Adquirir
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="mx-auto mb-3 d-flex">
              <Card.Body className="fondoVerdeOscuro text-center">
                <Card.Title>
                  <div className="textoAntiqueWhite text-decoration-underline">
                    Madurando
                  </div>
                </Card.Title>
                <Card.Text className="textoAntiqueWhite">
                  Servicios para mascotas de 5 a 10 años.
                </Card.Text>
                <Button as={Link} to="/contacto" variant="success">
                  Adquirir
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="mx-auto d-flex">
              <Card.Body className="fondoVerdeOscuro text-center">
                <Card.Title>
                  <div className="textoAntiqueWhite text-decoration-underline">
                    Adultos
                  </div>
                </Card.Title>
                <Card.Text className="textoAntiqueWhite">
                  Servicios para mascotas de más de 10 años.
                </Card.Text>
                <Button as={Link} to="/contacto" variant="success">
                  Adquirir
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PlanesInicio;