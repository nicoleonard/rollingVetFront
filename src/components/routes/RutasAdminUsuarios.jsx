import { Route, Routes } from "react-router-dom";
import AdminUsuarios from "../views/AdminUsuarios";

const RutasAdminUsuarios = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<AdminUsuarios></AdminUsuarios>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdminUsuarios;