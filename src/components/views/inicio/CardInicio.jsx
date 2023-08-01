import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardInicio({ titulo, contenido, imagen }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} style={{ height: '250px', objectFit: 'cover' }} />
      <Card.Body className="contenedor-recuadro ">
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {contenido}
        </Card.Text>
        <Button variant="success">Precio y variedades</Button>
      </Card.Body>
    </Card>
  );
}

export default CardInicio;