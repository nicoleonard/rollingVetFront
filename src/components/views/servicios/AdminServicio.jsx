import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarServicio, leerServicios } from "../../helpers/queriesServicios";
import Swal from "sweetalert2";


const AdminServicio = ({ servicio, setServicios }) => {

    const eliminarServicio = () => {
        Swal.fire({
            title: 'Elimina el servicio de forma permanente, esta seguro?',
            text: "No hay vuelta atras!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2b9f89',
            cancelButtonColor: '#ff2255',
            confirmButtonText: 'Si, borrar'
        }).then((result) => {
            if (result.isConfirmed) {
                borrarServicio(servicio._id).then((respuesta) => {
                    if (respuesta && respuesta.status === 200) {
                        Swal.fire(
                            'Se ha ido!',
                            `${servicio.titulo} se ha borrado exitosamente`,
                            'success'
                        )
                        leerServicios().then((respuesta) => {
                            if (respuesta) {
                                setServicios(respuesta);
                            }
                        });
                    } else {
                        Swal.fire(
                            'Oh no! Algo salio mal...',
                            `${servicio.titulo} no se pudo borrar`,
                            'error'
                        )
                    }
                })

            }
        })
    }
    return (
        <tr className="text-truncate">
            <td>{servicio.titulo}</td>
            <td>{servicio.descripcion}</td>
            <td>{servicio.precio}</td>
            <td className="d-flex flex-row flex-wrap justify-content-center">
                <Link className="btn btn-success w-auto me-1" to={'/admin-servicios/editar-servicio/' + servicio._id}>Editar</Link>
                <Button className="w-auto" variant="danger" onClick={eliminarServicio}>
                    Borrar
                </Button>
            </td>
        </tr>
    );
};

export default AdminServicio;