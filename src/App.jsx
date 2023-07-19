import "./App.css";
import Menu from "./components/common/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./components/views/Registro";
import Login from "./components/views/Login";
import Inicio from "./components/views/Inicio";
import InicioAdmin from "./components/views/InicioAdmin";
import AdminPacientes from "./components/views/AdminPacientes";
import AdminServicios from "./components/views/AdminServicios";
import AdminTurnos from "./components/views/AdminTurnos";
import Contacto from "./components/views/Contacto";
import Nosotros from "./components/views/Nosotros";
import Error404 from "./components/views/Error404";
import AgregarPaciente from "./components/views/pacientes/AgregarPaciente";
import EditarPaciente from "./components/views/pacientes/EditarPaciente";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route
          exact
          path="/inicio-admin"
          element={<InicioAdmin></InicioAdmin>}
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
          path="/admin-pacientes/editar-paciente"
          element={<EditarPaciente></EditarPaciente>}
        ></Route>
        <Route
          exact
          path="/admin-turnos"
          element={<AdminTurnos></AdminTurnos>}
        ></Route>
        <Route exact path="/nosotros" element={<Nosotros></Nosotros>}></Route>
        <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route
          exact
          path="/admin-servicios"
          element={<AdminServicios></AdminServicios>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
