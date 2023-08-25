import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { inicializarTurno, leerTurnos } from "../../helpers/queriesTurnos";
import Swal from "sweetalert2";


const AdminTurno = ({ turno, setTurnos }) => {

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
                            `${respuesta.contenido.mensaje}`,
                            `Fecha: ${turno.fecha} Hora: ${turno.hora} se ha liberado`,
                            'success'
                        )
                        leerTurnos().then((respuesta) => {
                            setTurnos(respuesta);
                        });
                    } else {
                        Swal.fire(
                            'Oh no! Algo salio mal...',
                            `${respuesta.contenido.mensaje}`,
                            'error'
                        )
                    }
                })

            }
        })
    }
    return (
        <tr>
            <td>{turno.hora}</td>
            <td>{turno.veterinario}</td>
            <td>{turno.usuario}</td>
            <td>{turno.paciente}</td>
            <td>{turno.detalleCita}</td>
            <td>{turno.fecha}</td>
            <td className="d-flex flex-columns flex-wrap justify-content-center">
                <Link className="btn btn-warning tamanioBoton" to={'/admin-turnos/editar-turno/' + turno._id}>Editar</Link>
                <Button className="tamanioBoton my-1" variant="danger" onClick={liberarTurno}>
                    Borrar
                </Button>
            </td>
        </tr>
    );
};

export default AdminTurno;