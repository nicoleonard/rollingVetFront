import { Route, Routes } from "react-router-dom";
import UsuariosTurnos from "../views/UsuariosTurnos";
import AgregarTurno from "../views/turnos/AgregarTurno";


const RutasUsuarioTurnos = () => {
    return (
        <>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<UsuariosTurnos></UsuariosTurnos>}
                ></Route>
                <Route
                    exact
                    path="/agregar-turno/:id"
                    element={<AgregarTurno></AgregarTurno>}
                ></Route>
            </Routes>
        </>
    );
};

export default RutasUsuarioTurnos;