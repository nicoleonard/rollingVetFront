import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();
  const onSubmit = () => {
    navegacion("/error404");
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="container mainSection my-5 w-100 mx-auto card bg-opacity-75 bg-light px-5"
    >
      <h1 className="my-3">Dejanos tu consulta y te contactamos</h1>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Juán Perez"
          {...register("nombre", {
            required: "El nombre es un campo obligatorio.",
            minLength: {
              value: 2,
              message: "La cantidad minima de caracteres es 2.",
            },
            maxLength: {
              value: 100,
              message: "La cantidad máxima de caracteres es 100.",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Form.ControlInput1">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com."
        {...register("email", {
            required: "El email es un campo obligatorio.",
            minLength: {
              value: 5,
              message: "La cantidad minima de caracteres es 5.",
            },
            maxLength: {
              value: 256,
              message: "La cantidad máxima de caracteres es 256.",
            },
            pattern: {
              value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              message: "El email debe tener un formato valido (mail@dominio.com)."
            } 
          })}
        />
        <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
        <Form.Label>Escribe tu consulta aquí</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Quería saber acerca de las vacunas para perros."
          rows={3}
          {...register("consulta", {
            required: "El este campo no puede quedar vacío.",
            minLength: {
              value: 2,
              message: "La cantidad minima de caracteres es 2.",
            },
            maxLength: {
              value: 300,
              message: "La cantidad máxima de caracteres es 300.",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.consulta?.message}</Form.Text>
      </Form.Group>
      <Button variant="success" type="submit" className="mb-3">
        Enviar
      </Button>
    </Form>
  );
};

export default Contacto;
