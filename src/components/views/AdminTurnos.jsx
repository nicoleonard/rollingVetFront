import { useEffect, useState } from "react";
const AdminTurnos = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    leerTurnos().then((respuesta) => {
        if (respuesta) {
            setTurnos(respuesta)
        } else {
            Swal.fire('Oops...', 'Intente esta operacion luego', 'error')
        }
    })
}, [])

  return (
    <section className="container mainSection">
      <h1>Administrador de turnos</h1>
    </section>
  );
};

export default AdminTurnos;
