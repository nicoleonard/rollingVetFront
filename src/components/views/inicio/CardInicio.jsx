import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardInicio({ titulo, contenido, imagen }) {
    return (
      <Card className="card-inicio mb-3">
        <Card.Img variant="top" src={imagen} />
        <Card.Body className="contenedor-recuadro">
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{contenido}</Card.Text>
          <Button variant="success">Precio y variedades</Button>
        </Card.Body>
      </Card>
    );
  }

export default CardInicio;