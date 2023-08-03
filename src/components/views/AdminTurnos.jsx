import { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import ReservaTurno from "./turnos/ReservaTurno"
import { leerTurnos, borrarTurnos, inicializarTurnos } from "../helpers/queriesTurnos";
import Swal from "sweetalert2";



const AdminTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    leerTurnos().then((respuesta) => {
      if (respuesta) {
        respuesta.sort((a, b) => a.hora - b.hora)
        setTurnos(respuesta)
      } else {
        Swal.fire('Oops...', 'Intente esta operacion luego', 'error')
      }

    })
  }, [])

  useEffect(() => {
    if (isLoading) {
      borrarTurnos().then((respuesta) => {
        if (respuesta && respuesta.status === 200) {
          inicializarTurnos(hora.length, veterinarios).then((respuesta) => {
            if (respuesta && respuesta.status === 201) {
              Swal.fire(
                "Operacion exitosa!",
                "Se ha inicializado la lista de turnos",
                "success"
              );
            } else {
              Swal.fire(
                "Oh no! Algo salio mal...",
                "No se pudo inicializar la lista de turnos",
                "error"
              );
            }
          })
        } else {
          Swal.fire(
            "Oh no! Algo salio mal...",
            "No se pudo borrar la lista de turnos",
            "error"
          );
        }

      }
      );
      setLoading(false);
    }
  }, [isLoading]);

  const handleClick = () => {
    Swal.fire({
      title: "Esta a punto de inicializar la lista de turnos, esta seguro?",
      text: "Todos los turnos del dia seran liberados!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#117700",
      cancelButtonColor: "#ff2255",
      confirmButtonText: "Si, borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
      }
    });
  };

  let hora = ["8:00", "9:00", "10:00", "11:00", "12:00", "17:00", "18:00", "19:00"]
  const veterinarios = ["veterinario1", "veterinario2"]

  return (
    <>
      <h1 className='text-center'>Lista de reservas de turnos</h1>
      <hr></hr>
      <Container>
        <Row>
          <Button variant="danger" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
            {isLoading ? 'Procesando…' : 'Inicializar Turnos'}
          </Button>
        </Row>
        <Row>
          <Col className='w-50'>
            <h2>Veterinario 1</h2>
            {
              turnos.map((turno) => {
                if (turno.veterinario === veterinarios[0]) {
                  return <ReservaTurno turno={turno} setTurnos={setTurnos} key={turno._id} hora={turno.hora}></ReservaTurno>
                }
              })

            }
          </Col>
          <Col className='w-50'>
            <h2>Veterinario 2</h2>
            {
              turnos.map((turno) => {
                if (turno.veterinario === veterinarios[1]) {
                  return <ReservaTurno turno={turno} setTurnos={setTurnos} key={turno._id} hora={turno.hora}></ReservaTurno>
                }
              })
            }
          </Col>
        </Row>

      </Container>


    </>
  );
};

export default AdminTurnos;
