import React from 'react';
import { Button } from "react-bootstrap";
import { borrarUsuario, leerUsuarios } from "../../helpers/queriesUsuarios";
import Swal from 'sweetalert2';

const AdminUsuario = ({ usuario, setUsuarios }) => {
  const eliminarUsuario = () => {
    Swal.fire({
      title: "Esta a punto de borrar un usuario, esta seguro?",
      text: "No hay vuelta atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2b9f89",
      cancelButtonColor: "#ff2255",
      confirmButtonText: "Si, borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarUsuario(usuario._id).then((respuesta) => {
          if (respuesta && respuesta.status === 200) {
            Swal.fire(
              `Adios ${usuario.usuario}`,
              `${respuesta.contenido.mensaje}`,
              "success"
            );
            leerUsuarios().then((respuesta) => {
              if (respuesta) {
                setUsuarios(respuesta);
              }
            });
          } else {
            Swal.fire(
              "Oh no! Algo salio mal...",
              `${respuesta.contenido.mensaje}`,
              "error"
            );
          }
        });
      }
    });
  };
  return (
    <tr>
      <td>{usuario._id}</td>
      <td>{usuario.usuario}</td>
      <td>{usuario.email}</td>
      <td>{usuario.tipo}</td>
      <td className="d-flex flex-columns flex-wrap justify-content-center">
        <Button className="w-75" variant="danger" onClick={eliminarUsuario}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default AdminUsuario;