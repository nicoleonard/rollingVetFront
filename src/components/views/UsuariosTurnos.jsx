import { useEffect, useState } from "react";
import ReservaTurno from "./turnos/ReservaTurno"
import { Container, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";
import Swal from "sweetalert2";
import { leerTurnos } from "../helpers/queriesTurnos";

const UsuariosTurnos = () => {
    const formato = { year: 'numeric', month: '2-digit', day: '2-digit' };

    const [turnos, setTurnos] = useState([])
    const [fechas, setFechas] = useState([]);
    const [fecha, setFecha] = useState(new Date().toLocaleDateString('es-ar', formato));

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



    return (
        <>

            <Container className="card m-4 w-100 align-self-center text-center bg-light bg-opacity-75">

                <Container as={"h1"} className="justify-content-center pt-3 d-flex">Lista de reservas de turnos
                    <DropdownButton id="dropdown-item-button" className="mx-2 align-self-center" title={fecha}>
                        {
                            fechas.map((fecha) => { return <Dropdown.Item key={fecha} as={"button"} onClick={() => { setFecha(fecha) }}>{fecha}</Dropdown.Item> })
                        }


                    </DropdownButton>
                </Container>

                <hr></hr>
                <Row>
                    <Col className=' px-1 text-center'>
                        <Container as={"h3"}>{veterinarios[0]}</Container>
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
            </Container>
        </>
    );
};

export default UsuariosTurnos;