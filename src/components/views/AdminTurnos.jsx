import { useEffect, useState } from "react";
import { Container, Col, Row, Button, Table, Card, Dropdown, DropdownButton } from "react-bootstrap";
import ReservaTurno from "./turnos/ReservaTurno"
import AdminTurno from "./turnos/AdminTurno"
import { leerTurnos, borrarTurnos, inicializarTurnos } from "../helpers/queriesTurnos";
import Swal from "sweetalert2";




const AdminTurnos = () => {
  const formato = { year: 'numeric', month: '2-digit', day: '2-digit' };

  const [turnos, setTurnos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [fechas, setFechas] = useState([]);
  const [fecha, setFecha] = useState(new Date().toLocaleDateString('es-ar', formato));

  const hora = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"]
  const veterinarios = ["Estella Ruiz", "Ricardo Haro"]

  useEffect(() => {
    leerTurnos().then((respuesta) => {
      if (respuesta) {
        respuesta.sort((a, b) => a.hora - b.hora)
        let fechaInicial = respuesta[0].fecha
        let arrayFecha = []
        let arrayFechas = []
        let dia = 0
        for (let i = 0; i <= 5; i++) {
          arrayFecha = fechaInicial.split("/")
          dia = parseInt(arrayFecha.shift(arrayFecha[0]), 10) + i
          arrayFecha.unshift(dia.toString())
          arrayFechas.push(arrayFecha.join("/"))
        }
        setFechas(arrayFechas)

        let turnosDia = respuesta.filter((turno) => {
          return turno.fecha === fecha
        })
        setTurnos(turnosDia)
      } else {
        Swal.fire('Oops...', 'Intente esta operacion luego', 'error')
      }

    })
  }, [fecha])

  useEffect(() => {
    if (isLoading) {
      borrarTurnos().then((respuesta) => {
        if (respuesta && respuesta.status === 200) {
          inicializarTurnos(hora, veterinarios).then((respuesta) => {
            if (respuesta && respuesta.status === 201) {

              Swal.fire(
                "Operacion exitosa!",
                ` ${respuesta.contenido.mensaje}`,
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
                `${respuesta.contenido.mensaje}`,
                "error"
              );
            }
          })
        } else {
          Swal.fire(
            "Oh no! Algo salio mal...",
            `${respuesta.contenido.mensaje}`,
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
      text: "Todos los turnos de la semana seran liberados!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2b9f89",
      cancelButtonColor: "#ff2255",
      confirmButtonText: "Si, estoy seguro",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
      }
    });
  };

  return (
    <>

      <Container as={"section"} className="my-4 w-100 mx-auto text-center card p-4 bg-light bg-opacity-75 min-vh-100">
        <Container as={"h1"} className="justify-content-center pt-3 d-flex">Lista de reservas de turnos
          <DropdownButton id="dropdown-item-button" className="mx-2 align-self-center" title={fecha}>
            {
              fechas.map((fecha) => { return <Dropdown.Item key={fecha} as={"button"} onClick={() => { setFecha(fecha) }}>{fecha}</Dropdown.Item> })
            }


          </DropdownButton>
        </Container>
        <hr className="m-0"></hr>
        <hr className="mt-0"></hr>
        <Row className="mb-3 justify-content-center" xs={1} sm={2} md={2} lg={2} xl={2}>
          <Col className=' px-1 text-center'>
            <Container as={"h3"}>{veterinarios[0]}</Container>
            <hr />

            {
              turnos.map((turno) => {

                if (turno.veterinario === veterinarios[0]) {
                  return <ReservaTurno turno={turno} setTurnos={setTurnos} key={turno._id}></ReservaTurno>
                }
              })

            }
          </Col>
          <Col className=' px-1 text-center'>
            <Container as={"h3"}>{veterinarios[1]}</Container>
            <hr />
            {
              turnos.map((turno) => {
                if (turno.veterinario === veterinarios[1]) {
                  return <ReservaTurno turno={turno} setTurnos={setTurnos} key={turno._id}></ReservaTurno>
                }
              })
            }
          </Col>
        </Row>
        <hr></hr>
        <Card>
          <Card.Header as={"h2"}>INICIALIZAR LOS TURNOS LOS LUNES</Card.Header>
          <Card.Body>
            <Button variant="danger" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
              {isLoading ? 'Procesando…' : 'Inicializar turnos de la semana'}
            </Button>
          </Card.Body>
        </Card>


      </Container>
      <Container fluid="true" className="card p-4 bg-light bg-opacity-75">
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
