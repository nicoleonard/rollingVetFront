import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function CardInicio({ titulo, contenido, imagen }) {
    return (
      <Card className="card-inicio mb-3">
        <Card.Img variant="top" src={imagen} />
        <Card.Body className="contenedor-recuadro fondoVerdeOscuro">
          <Card.Title><div className="textoAntiqueWhite text-decoration-underline">{titulo}</div></Card.Title>
          <Card.Text className="textoAntiqueWhite">{contenido}</Card.Text>
          <Button as={Link} to="/error404" variant="success">Precio y variedades</Button>
        </Card.Body>
      </Card>
    );
  }

export default CardInicio;