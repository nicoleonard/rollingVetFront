import { Card, Row, Col, Button, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import { inicializarTurno, leerTurnos } from "../../helpers/queriesTurnos";
import Swal from "sweetalert2";



const ReservaTurno = ({ turno, setTurnos }) => {
    const liberarTurno = () => {
        Swal.fire({
            title: 'Elimina la reserva del turno, esta seguro?',
            text: "Eliminar una reserva con menos de 12 horas de anticipacion puede causar una paradoja espacio-temporal y destruir el universo.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2b9f89',
            cancelButtonColor: '#ff2255',
            confirmButtonText: 'Si, eliminar reserva'
        }).then((result) => {
            if (result.isConfirmed) {
                inicializarTurno(turno._id).then((respuesta) => {
                    if (respuesta && respuesta.status === 200) {
                        Swal.fire(
                            'Se ha ido!',
                            `El turno de la fecha ${turno.fecha} a las ${turno.hora} se ha liberado`,
                            'success'
                        )
                        leerTurnos().then((respuesta) => {
                            if (respuesta) {
                                setTurnos(respuesta);
                            }
                        });
                    } else {
                        Swal.fire(
                            'Oh no! Algo salio mal...',
                            `No se elimino la reserva del turno de la fecha ${turno.fecha} a las ${turno.hora}`,
                            'error'
                        )
                    }
                })

            }
        })
    }
        if (turno.turnoLibre) {
            return (
                <Link className="btn btn-primary" to={'/admin-turnos/agregar-turno/' + turno._id}>
                    <p>Reserva HS {turno.hora}</p>
                </Link>
            )
        } else {
            return (
                <>
                    <Card className="px-0 h-25">
                        <Card.Header>
                            <Row>
                                <Col>
                                    <h3>{turno.veterinario}</h3>
                                </Col>
                                <Col>
                                    <Row>
                                        <p className="fs-6">{turno.paciente}</p>
                                    </Row>
                                    <Row>
                                        <p className="text-secondary fw-light">{turno.usuario}</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{turno.fecha}</ListGroup.Item>
                                <ListGroup.Item>{turno.hora}</ListGroup.Item>
                                <ListGroup.Item>{turno.detalleCita}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="w-75" variant="danger" onClick={liberarTurno}>
                                Borrar
                            </Button>
                        </Card.Footer>
                    </Card>
                </>
            )
        }
    
};

export default ReservaTurno;
