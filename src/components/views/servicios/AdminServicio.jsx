import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarServicio, leerServicios } from "../../helpers/queriesServicios";

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
                            `${servicio.nombre} se ha borrado exitosamente`,
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
                            `${servicio.nombre} no se pudo borrar`,
                            'error'
                        )
                    }
                })

            }
        })
    }
    return (
        <tr>
            <td>{servicio._id}</td>
            <td>{servicio.nombre}</td>
            <td>{servicio.ingredientes}</td>
            <td>{servicio.instrucciones}</td>
            <td className="d-flex flex-columns flex-wrap justify-content-center">
                <Link className="btn btn-warning w-75" to={'/admin/editar-servicio/' + servicio._id}>Editar</Link>
                <Button className="w-75" variant="danger" onClick={eliminarServicio}>
                    Borrar
                </Button>
            </td>
        </tr>
    );
};

export default AdminServicio;