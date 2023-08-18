import { Button } from "react-bootstrap";
import { borrarPaciente, obtenerPacientes } from "../../helpers/queriesPacientes";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemPaciente = ({ paciente, setPacientes }) => {
  const eliminarPaciente = () => {
    borrarPaciente(paciente._id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Paciente eliminado",
          `El paciente ${paciente.usuario} fue eliminado correctamente`,
          "success"
        );

        obtenerPacientes().then((respuesta) => {
          if (respuesta) {
            setPacientes(respuesta);
          }
        });
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El paciente ${paciente.nombre} no pudo ser eliminado`,
          "error"
        );
      }
    });
  };

  return (
    <tr>
      <td>{paciente.usuario}</td>
      <th>{paciente.email}</th>
      <th>{paciente.telefono}</th>
      <th>{paciente.direccion}</th>
      <th>{paciente.nombreMascota}</th>
      <th>{paciente.especie}</th>
      <th>{paciente.raza}</th>
      <td className="text-center">
        <Link
          className="btn btn-success w-auto me-1"
          to={"/admin-pacientes/editar-paciente/" + paciente._id}
        >
          Editar
        </Link>
        <Button variant="danger" onClick={eliminarPaciente}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemPaciente;
