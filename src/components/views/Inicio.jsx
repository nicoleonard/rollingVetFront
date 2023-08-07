import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CarrouseInicio from "./inicio/CarrouseInicio";
import ListaServicio from "./servicios/ListaServicio";
import { useEffect, useState } from "react";
import { leerServicios } from "../helpers/queriesServicios";
import ReviewClientes from "./inicio/ReviewClientes";
import DatosCards from "./inicio/DatosCards.jsx"
import CardInicio from "./inicio/CardInicio";
import Profesionales from "./inicio/Profesionales";
import PlanesInicio from "./inicio/planesInicio";

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
      <Container className="my-4 w-100 mx-auto card bg-opacity-75 bg-success px-5">
        <Container className="bg-success card mt-3">
      <h2 className="text-center display-1 text-light mb-3">Productos</h2>
      </Container>
      <hr />
        <Row className="my-4">
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
      <img src="https://www.vitalcan.com/wp-content/uploads/2022/06/banner-slider_nutrique-home_v2.jpg" alt="Alimento Nutrique" />
      <Container className="my-4 w-100 mx-auto card bg-opacity-75 bg-success px-5">
        <h1 className="display-4 textoAntiqueWhite mt-3 text-center">Nuestros Servicios</h1>
        <hr />
        <Row className="mb-3">
          {servicios && servicios.length > 0 ? (
            servicios.map((servicio) => (
              <ListaServicio key={servicio._id} servicio={servicio} />
            ))
          ) : (
            <p className="textoAntiqueWhite">No hay servicios disponibles</p>
          )}
        </Row>
      </Container>
      <PlanesInicio></PlanesInicio>
      <ReviewClientes></ReviewClientes>
      <Profesionales></Profesionales>
    </>
  );
};

export default Inicio;
