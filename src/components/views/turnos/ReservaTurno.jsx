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
            <>
                <Card className="px-0 mb-1">
                    <Link className="btn btn-primary" to={'/admin-turnos/agregar-turno/' + turno._id}>
                        Reserva HS {turno.hora}
                    </Link>
                </Card>
            </>
        )
    } else {
        return (
            <>
                <Card className="px-0 mb-1">
                    <Card.Header className="p-1">
                        <Row className="p-0 w-75 mx-auto">
                            <Col className="text-start p-0">
                                {turno.servicios}
                            </Col>
                            <Col className="text-end p-0">
                                <Button className="w-50 py-0" variant="danger" onClick={liberarTurno}>
                                    Borrar
                                </Button>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body className="px-1 py-1 m-0">
                        <Row className="p-0 w-75 mx-auto">
                            <Col className="px-0">
                                <ListGroup className="list-group-flush text-center">
                                    <ListGroup.Item className="p-0">{turno.fecha}</ListGroup.Item>
                                    <ListGroup.Item className="p-0">{turno.hora}</ListGroup.Item>
                                </ListGroup>
                            </Col>

                            <Col className="px-0">
                                <ListGroup className="list-group-flush text-center">
                                    <ListGroup.Item className="p-0">{turno.usuario}</ListGroup.Item>
                                    <ListGroup.Item className="p-0">{turno.paciente}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </>
        )
    }

};

export default ReservaTurno;
