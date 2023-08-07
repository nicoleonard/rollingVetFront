import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { actualizarTurno, leerTurno } from "../../helpers/queriesTurnos";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { leerServicios } from "../../helpers/queriesServicios";

const AgregarTurno = () => {

  const [servicios, setServicios] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [usuarioLogeado] = useState(
    JSON.parse(sessionStorage.getItem("usuario")) || {}
  );

  const { id } = useParams();
  const navegacion = useNavigate()

  useEffect(() => {
    const fechaActual = new Date()
    leerTurno(id).then((respuesta) => {
      setValue('hora', respuesta.hora)
      setValue('veterinario', respuesta.veterinario)
      setValue('fecha', fechaActual.toLocaleDateString("en-CA", { year: 'numeric', month: '2-digit', day: '2-digit' }))
    })

  }, [])

  useEffect(() => {
    leerServicios().then((respuesta) => {
      setServicios(respuesta)
    })

  }, [])



  const onSubmit = (nuevoTurno) => {
    nuevoTurno.turnoLibre = false;
    nuevoTurno._id = id;
    actualizarTurno(nuevoTurno, id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Operacion exitosa",
          `Se ha creado el turno para ${nuevoTurno.veterinario} a las ${nuevoTurno.hora}`,
          "success"
        );
        reset();
        if(usuarioLogeado.tipo === "usuario"){
          navegacion("/reserva-turnos");
          return
        }
        navegacion("/admin-turnos")
      } else {
        Swal.fire(
          "Oops... algo salio mal",
          `No se pudo crear el turno para ${nuevoTurno.veterinario} a las ${nuevoTurno.hora}`,
          "error"
        );
      }
    });
  };

  return (
    <Container className="card ms-auto my-4 p-4 bg-light bg-opacity-75">
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

        <Form.Group className="mb-3">
          <Form.Label>Detalles de la cita</Form.Label>
          <Form.Control type="text"
            {...register("detalleCita", {
              required: "La fecha del turno no puede estar vacia",
            })}>
          </Form.Control>
          <Form.Text className="text-danger">
            {errors.detalleCita?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Select
            {...register("servicios", {
              required: "El campo servicios no puede estar vacio",
            })}>
            <option>Seleccione un servcio de la lista</option>
            {
              servicios.map((servicio) => {
                return <option key={servicio._id} value={servicio.titulo}>{servicio.titulo}</option>
              })
            }
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.servicios?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="my-3">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarTurno;
