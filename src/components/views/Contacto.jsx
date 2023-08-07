import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const Contacto = () => {
  return (

    <Form className='container mainSection my-5 w-100 mx-auto card bg-opacity-75 bg-light px-5'>
      <h1 className='my-3'>
        Dejanos tu consulta y te contactamos
      </h1>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Juán Perez"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Form.ControlInput1">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
        <Form.Label>Escribe tu consulta aquí</Form.Label>
        <Form.Control as="textarea" placeholder="Quería saber acerca de las vacunas para perros." rows={3} />
      </Form.Group>
      <Button variant="success" className='mb-3'>Enviar</Button>
    </Form>
  );
};

export default Contacto;

