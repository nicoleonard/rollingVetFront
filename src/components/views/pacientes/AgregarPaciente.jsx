import { Form, Button, Row, Card, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearPaciente } from "../../helpers/queriesPacientes";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AgregarPaciente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (Nuevo) => {
  const navegacion = useNavigate();
    crearPaciente(Nuevo).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire('Paciente creado', `El paciente ${Nuevo.nombreMascota} fue creado correctamente`, 'success');
        reset();
        navegacion("/admin-pacientes")
      } else {
        Swal.fire('Ocurrio un error', `El paciente ${Nuevo.nombreMascota} no pudo ser creado, intente en unos minutos`, 'error');
      }
    })
  };

  return (
    <section className="container card my-4 p-4 bg-light bg-opacity-75 min-vh-100">
      <h1 className="display-4 mt-5">Nuevo paciente</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card className="p-0 mb-2">
          <Card.Header>Informacion de usuario</Card.Header>
          <Card.Body>
            <Row>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Usuario"
                    {...register("usuario", {
                      required: "El nombre del usuario es obligatorio",
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.nombre?.message}
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ejemplo@ejemplo.com"
                    {...register('email', { required: 'El email es necesario', pattern: { value: /\S+@\S+\.\S+/, message: 'Se debe ingresar un email valido' } })}
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>
              </Col>

            </Row>
          </Card.Body>
        </Card>

        <Card className="p-0 mb-2">
          <Card.Header>Informacion de contacto</Card.Header>
          <Card.Body>
            <Row>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="codigo de area (381) 667 1895"
                    {...register("telefono", {
                      required: "El telefono es obligatorio",
                      minLength: {
                        value: 9,
                        message: "El telefono es incorrecto",
                      },
                      maxLength: {
                        value: 15,
                        message: "El telefono es incorrecto numeros maximos: 15",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.telefono?.message}
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Avenida Siempreviva 742"
                    {...register("direccion", {
                      required: "Dirección obligatoria",
                      min: {
                        value: 5,
                        message: "Direccion incorrecta",
                      },
                      max: {
                        value: 50,
                        message: "Direccion incorrecta",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.direccion?.message}
                  </Form.Text>
                </Form.Group>
              </Col>

            </Row>
          </Card.Body>
        </Card>

        <Card className="p-0">
          <Card.Header>Informacion de paciente</Card.Header>
          <Card.Body>
            <Row>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre de la mascota</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Perricola"
                    {...register("nombreMascota", {
                      required: "Nombre de la mascota obligatorio",
                      min: {
                        value: 2,
                        message: "El Nombre de la mascota es incorrecto",
                      },
                      max: {
                        value: 30,
                        message: "El Nombre de la mascota es incorrecto ,30 caracteres maximos",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.nombreMascota?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Especie</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="perro , gato, reptil, roedor, etc"
                    {...register("especie", {
                      required: "especie obligatoria",
                      min: {
                        value: 2,
                        message: "El Nombre de la especie es incorrecto",
                      },
                      max: {
                        value: 30,
                        message: "El Nombre de la especie es incorrecto ,30 caracteres maximos",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.especie?.message}
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Raza</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="pitbul , siames, hámsterer, serpiente cascabel"
                    {...register("raza", {
                      required: "Raza obligatoria",
                      min: {
                        value: 2,
                        message: "El Nombre de la raza es incorrecto",
                      },
                      max: {
                        value: 30,
                        message: "El Nombre de la raza es incorrecto ,30 caracteres maximos",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.raza?.message}
                  </Form.Text>
                </Form.Group>

              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Form.Group className="text-center p-3">
          <Button variant="primary" type="submit" size="lg">
            Guardar
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default AgregarPaciente;
