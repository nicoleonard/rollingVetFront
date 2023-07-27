import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemPaciente from "../views/pacientes/ItemPaciente"
import { obtener } from "../helpers/queries";

const AdminPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    obtener().then((respuesta) => {
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
            <th>nombre</th>
            <th>apellido</th>
            <th>email</th>
            <th>teléfono</th>
            <th>dirección</th>
            <th>nombreMascota</th>
            <th>especie</th>
            <th>raza</th>
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
