import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { agregarTurno } from "../../helpers/queriesTurnos";

const AgregarTurno = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const { hora, veterinario } = useParams();

  useEffect(() => {
        setValue('hora', hora)
        setValue('veterinario',veterinario)
  }, [])



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
            <Form.Control type="time"
                          readOnly
            {...register("hora", {
                required: "La hora del turno no puede estar vacia",
            })}>
            </Form.Control>
            <Form.Text className="text-danger">
              {errors.hora?.message}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDoctor">
        <Form.Label>Veterinario</Form.Label>
            <Form.Control type="time"
                          readOnly
            {...register("veterinario", {
                required: "El campo del veterinario no puede estar vacio",
            })}>
            </Form.Control>
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
