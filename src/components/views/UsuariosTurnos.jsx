import { useEffect, useState } from "react";
import ReservaTurno from "./turnos/ReservaTurno"
import { Container, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { leerTurnos } from "../helpers/queriesTurnos";

const UsuariosTurnos = () => {
    const [turnos, setTurnos] = useState([])

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

    return (
        <>

            <Container className="card m-4 w-100 align-self-center text-center bg-light bg-opacity-75">
                <h1 className='text-center pt-3'>Lista de reservas de turnos</h1>
                <hr></hr>
                <Row>
                    <Col className=' px-1 text-center'>
                        <h2>Veterinario 1</h2>
                        <hr></hr>
                        {
                            turnos.map((turno) => {
                                if (turno.veterinario === veterinarios[0]) {
                                    return <ReservaTurno turno={turno} setTurnos={setTurnos} key={turno._id}></ReservaTurno>
                                }
                            })

                        }
                    </Col>
                    <Col className=' px-1 text-center'>
                        <h2>Veterinario 2</h2>
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
            </Container>
        </>
    );
};

export default UsuariosTurnos;