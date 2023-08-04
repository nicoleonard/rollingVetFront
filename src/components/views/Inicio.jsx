import { Container, Row, Col } from "react-bootstrap";
import CardInicio from "./inicio/CardInicio";
import CarrouseInicio from "./inicio/CarrouseInicio";
import ListaServicio from "./servicios/ListaServicio";
import { useEffect, useState } from "react";
import { leerServicios } from "../helpers/queriesServicios";


const Inicio = () => {
  const [servicios,setServicios] = useState([])
  useEffect(()=>{
    leerServicios().then(res=>{
      setServicios(res)
    })
  },[])
  return (
    <>
    <CarrouseInicio></CarrouseInicio>
    <h2 className="text-center display-1">Productos</h2>
    <Container className="text-center my-5">
    <Row className="mb-5">
      <Col><CardInicio></CardInicio></Col>
      <Col><CardInicio></CardInicio></Col>
      <Col><CardInicio></CardInicio></Col>
    </Row>
    <Row>
    <Col><CardInicio></CardInicio></Col>
    <Col><CardInicio></CardInicio></Col>
    <Col><CardInicio></CardInicio></Col>
    </Row>
    </Container>
    <Container>
  <h1 className="display-4">Nuestros Servicios</h1>
  <hr />
  <Row>
    {servicios && servicios.length > 0 ? (
      servicios.map((servicio) => (
        <ListaServicio key={servicio._id} servicio={servicio} />
      ))
    ) : (
      <p>No hay servicios disponibles</p>
    )}
  </Row>
</Container>

    </>
  );
};

export default Inicio;
