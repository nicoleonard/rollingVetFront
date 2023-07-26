import { Button } from "react-bootstrap";
import { borrarProducto, obtenerProductos } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemPaciente = ({ producto, setProductos }) => {
  const eliminarProducto = () => {
    //todo: agregar la consulta de sweetalert para preguntar si esta seguro que quiere borrar
    borrarProducto(producto._id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto eliminado",
          `El producto ${producto.nombreProducto} fue eliminado correctamente`,
          "success"
        );
        //recargar la tabla
        obtenerProductos().then((respuesta) => {
          if (respuesta) {
            setProductos(respuesta);
          }
        });
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El producto ${producto.nombreProducto} no pudo ser eliminado`,
          "error"
        );
      }
    });
  };

  return (
    <tr>
      <td>{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link
          className="btn btn-warning"
          to={"/administrador/editar-producto/" + producto._id}
        >
          Editar
        </Link>
        <Button variant="danger" onClick={eliminarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemPaciente;
