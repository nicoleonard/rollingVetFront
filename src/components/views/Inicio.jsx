import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CarrouseInicio from "./inicio/CarrouseInicio";
import ListaServicio from "./servicios/ListaServicio";
import { useEffect, useState } from "react";
import { leerServicios } from "../helpers/queriesServicios";
import ReviewClientes from "./inicio/ReviewClientes";
import DatosCards from "./inicio/DatosCards.jsx"
import CardInicio from "./inicio/CardInicio";

const Inicio = () => {
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    leerServicios().then((res) => {
      setServicios(res);
    });
  }, []);
  return (
    <>
      <CarrouseInicio></CarrouseInicio>
      <h2 className="text-center display-1 textoAntiqueWhite">Productos</h2>
      <Container className="text-center my-5">
        <Row className="mb-4">
          {DatosCards.map((card, index) => (
            <Col key={index} lg={4} md={6} xs={12} className="d-flex justify-content-center">
              <CardInicio
                titulo={card.titulo}
                contenido={card.contenido}
                imagen={card.imagen}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <img src="https://www.whiskas.com.ar/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2296/files/2022-12/Adult_hero_desktop-ar.png" alt="Banner Whiskas" />
      <Container>
        <h1 className="display-4 textoAntiqueWhite">Nuestros Servicios</h1>
        <hr />
        <Row>
          {servicios && servicios.length > 0 ? (
            servicios.map((servicio) => (
              <ListaServicio key={servicio._id} servicio={servicio} />
            ))
          ) : (
            <p className="textoAntiqueWhite">No hay servicios disponibles</p>
          )}
        </Row>
      </Container>
      <ReviewClientes></ReviewClientes>
    </>
  );
};

export default Inicio;
