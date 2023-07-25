import { Route, Routes } from "react-router-dom";
import Administrador from "../views/Administrador";
import AdminPacientes from "../views/AdminPacientes";
import AdminServicios from "../views/AdminServicios";
import AdminTurnos from "../views/AdminTurnos";
import AgregarPaciente from "../views/pacientes/AgregarPaciente";
import EditarPaciente from "../views/pacientes/EditarPaciente";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/admin-pacientes"
          element={<AdminPacientes></AdminPacientes>}
        ></Route>
        <Route
          exact
          path="/admin-pacientes/agregar-paciente"
          element={<AgregarPaciente></AgregarPaciente>}
        ></Route>
        <Route
          exact
          path="/admin-pacientes/editar-paciente/:id"
          element={<EditarPaciente></EditarPaciente>}
        ></Route>
         <Route
          exact
          path="/admin-turnos"
          element={<AdminTurnos></AdminTurnos>}
        ></Route>
        <Route
          exact
          path="/admin-servicios"
          element={<AdminServicios></AdminServicios>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;

        
        
        
       

        
