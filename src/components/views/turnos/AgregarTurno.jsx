import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { agregarTurno } from "../../helpers/queriesTurnos";
const AgregarTurno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

const onSubmit = (nuevoTurno) => {    
  agregarTurno(nuevoTurno).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "Operacion exitosa",
          `Se ha creado el turno ${nuevoTurno.nombre}`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Oops... algo salio mal",
          `${nuevoTurno.nombre} no pudo ser agregado como un nuevo turno, quizás luego`,
          "error"
        );
      }
    });
  };
  
  return (
    <Container>
      <h1 className="display-4 mt-5">Nuevo turno</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formHorario">
            <Form.Label>Horario</Form.Label>
            <Form.Select 
            {...register("horario", {
                required: "El horario del turno no puede estar vacio",
            })}>
        <option>Seleccione su horario</option>
        <option value="1">9:00</option>
        <option value="2">9:30</option>
        <option value="3">10:00</option>
        <option value="4">10:30</option>
        <option value="5">11:00</option>
        <option value="6">11:30</option>
        <option value="7">12:00</option>
        <option value="8">12:30</option>
        <option value="9">13:00</option>
        <option value="10">13:30</option>
        <option value="11">14:00</option>
        <option value="12">14:30</option>
        <option value="13">15:00</option>
        <option value="14">15:30</option>
        <option value="15">16:00</option>
        <option value="16">16:30</option>
        </Form.Select>
        <Form.Text className="text-danger">
            {errors.horario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDoctor">
        <Form.Label>Doctor</Form.Label>
            <Form.Select>
        <option>Seleccione su doctor</option>
        <option value="1">Dr Pablo</option>
        <option value="2">Dr Mariano</option>
        </Form.Select>
        <Form.Text className="text-danger">
            {errors.doctor?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarTurno;
