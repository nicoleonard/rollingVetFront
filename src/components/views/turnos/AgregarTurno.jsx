import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { agregarTurno,leerTurno } from "../../helpers/queriesTurnos";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AgregarTurno = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const { id } = useParams();

  useEffect(() => {
    const fechaActual = new Date()
    leerTurno(id).then((respuesta) => {
      setValue('hora', respuesta.hora)
      setValue('veterinario',respuesta.veterinario)
      setValue('fecha', fechaActual.toLocaleDateString("en-CA",{year: 'numeric', month: '2-digit', day: '2-digit' }))
  })

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

        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
        <Form.Label>Veterinario</Form.Label>
            <Form.Control type="string"
                          readOnly
            {...register("veterinario", {
                required: "El campo de veterinario no puede estar vacio",
            })}>
            </Form.Control>
        <Form.Text className="text-danger">
            {errors.doctor?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="string"
                          readOnly
            {...register("usuario", {
                required: "El campo de usuario no puede estar vacio",
            })}>
            </Form.Control>
            <Form.Text className="text-danger">
              {errors.usuario?.message}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Paciente</Form.Label>
            <Form.Control type="string"
                          readOnly
            {...register("paciente", {
                required: "El campo de paciente no puede estar vacio",
            })}>
            </Form.Control>
            <Form.Text className="text-danger">
              {errors.paciente?.message}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="Date"
                          readOnly
            {...register("fecha", {
                required: "La fecha del turno no puede estar vacia",
            })}>
            </Form.Control>
            <Form.Text className="text-danger">
              {errors.fecha?.message}
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
