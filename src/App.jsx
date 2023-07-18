import './App.css';
import Menu from './components/common/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './components/views/Registro';
import Login from './components/views/Login';
import Inicio from './components/views/Inicio';
import InicioAdmin from './components/views/InicioAdmin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Menu></Menu>}></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/inicio" element={<Inicio></Inicio>}></Route>
        <Route exact path="/inicio-admin" element={<InicioAdmin></InicioAdmin>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
