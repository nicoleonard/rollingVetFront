import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminServicio from "./servicios/AdminServicio";
import { leerServicios } from "../helpers/queriesServicios";  

const AdminServicios = () => {
    const [servicios, setServicios] = useState([]);



    useEffect(() => {
        leerServicios().then((respuesta) => {
            if (respuesta) {
                setServicios(respuesta)
            } else {
                Swal.fire('Oops...', 'Intente esta operacion luego', 'error')
            }
        })
    }, [])

    return (
        <Container fluid="true" className="px-5">
            <div className="d-flex justify-content-between align-items-center mt-5">
                <h1 className="display-4 ">Administrador de servicios</h1>
                <Link className="btn btn-primary" to='/admin-servicios/agregar-servicio'>
                    Agregar
                </Link>
            </div>
            <hr/>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Indice</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        servicios.map((servicio) => <AdminServicio servicio={servicio} key={servicio._id} setServicios={setServicios}></AdminServicio>)
                    }
                </tbody>
            </Table>
        </Container>


    );
};

export default AdminServicios;