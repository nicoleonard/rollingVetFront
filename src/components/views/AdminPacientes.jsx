import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemPaciente from "../views/pacientes/ItemPaciente"
import { obtenerPacientes } from "../helpers/queriesPacientes";
import Swal from "sweetalert2";


const AdminPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    obtenerPacientes().then((respuesta) => {
      if (respuesta) {
        setPacientes(respuesta);
      } else {
        Swal.fire("Oops...", "Intente esta operacion luego", "error");
      }
    });
  }, []);

  return (
    <Container fluid="true" className="px-5">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Administrador de pacientes</h1>
        <Link
          className="btn btn-primary"
          to="/admin-pacientes/agregar-paciente"
        >
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Paciente</th>
            <th>Especie</th>
            <th>Raza</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <ItemPaciente
              paciente={paciente}
              key={paciente._id}
              setPacientes={setPacientes}
            ></ItemPaciente>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminPacientes;
