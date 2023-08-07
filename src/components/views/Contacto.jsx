import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const Contacto = () => {
  return (

    <Form className='container mainSection my-5'>
      <h1>
        Dejanos tus datos con tu consulta y nosotros te contactaremos
      </h1>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Escribe tu consulta aqui</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="dark">enviar</Button>
    </Form>
  );
};

export default Contacto;

