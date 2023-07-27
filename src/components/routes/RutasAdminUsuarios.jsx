import { Route, Routes } from "react-router-dom";
import AdminUsuarios from "../views/AdminUsuarios";
import AgregarUsuario from "../views/usuarios/AgregarUsuario";
import EditarUsuario from "../views/usuarios/EditarUsuario";

const RutasAdminUsuarios = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<AdminUsuarios></AdminUsuarios>}
        ></Route>
        <Route
          exact
          path="/agregar-usuario"
          element={<AgregarUsuario></AgregarUsuario>}
        ></Route>
        <Route
          exact
          path="/editar-usuario/:id"
          element={<EditarUsuario></EditarUsuario>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdminUsuarios;