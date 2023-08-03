import { useEffect, useState } from "react";
import { Container, Col, Row, Button, Table } from "react-bootstrap";
import ReservaTurno from "./turnos/ReservaTurno"
import AdminTurno from "./turnos/AdminTurno"
import { leerTurnos, borrarTurnos, inicializarTurnos } from "../helpers/queriesTurnos";
import Swal from "sweetalert2";



const AdminTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  let hora = ["08:00", "09:00"]
  const veterinarios = ["veterinario1", "veterinario2"]

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
        console.log(respuesta)
        if (respuesta && respuesta.status === 200) {
          inicializarTurnos(hora, veterinarios).then((respuesta) => {
            console.log(respuesta)
            if (respuesta && respuesta.status === 201) {

              Swal.fire(
                "Operacion exitosa!",
                `${respuesta}`,
                "success"
              );
              leerTurnos().then((respuesta) => {
                if (respuesta) {
                  setTurnos(respuesta);
                }
              })
            } else {
              Swal.fire(
                "Oh no! Algo salio mal...",
                `${respuesta}`,
                "error"
              );
            }
          })
        } else {
          Swal.fire(
            "Oh no! Algo salio mal...",
            `${respuesta}`,
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
                  return <ReservaTurno turno={turno} setTurnos={setTurnos} key={turno._id}></ReservaTurno>
                }
              })

            }
          </Col>
          <Col className='w-50'>
            <h2>Veterinario 2</h2>
            {
              turnos.map((turno) => {
                if (turno.veterinario === veterinarios[1]) {
                  return <ReservaTurno turno={turno} setTurnos={setTurnos} key={turno._id}></ReservaTurno>
                }
              })
            }
          </Col>
        </Row>
      </Container>
      <Container fluid="true" className="px-5">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Administrador de turnos</h1>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Hora</th>
              <th>Veterinario</th>
              <th>Usuario</th>
              <th>Paciente</th>
              <th>Detalle</th>
              <th>Fecha</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              turnos.map((turno) => {
                if (!turno.turnoLibre) {
                  return <AdminTurno turno={turno} key={turno._id} setTurnos={setTurnos}></AdminTurno>
                }
              })
            }
          </tbody>
        </Table>
      </Container>

    </>
  );
};

export default AdminTurnos;
