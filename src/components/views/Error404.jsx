import { Button, Container } from "react-bootstrap";
import React from "react";
import "../../App.css";

const Error404 = () => {
  return (
      <Container className="mainSection min-vh-100 fondo" >
      <div className="mb-2 btnCentrado pt-2">
        <Button href="/" variant='primary' size="lg">
          Volver
        </Button>
      </div>
      </Container>
  );
};

export default Error404;
