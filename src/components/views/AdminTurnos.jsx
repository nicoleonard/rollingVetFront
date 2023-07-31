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

  let hora = ["8:00","9:00","10:00","11:00","12:00","17:00","18:00","19:00"]
  const vet1="veterinario 1"
  const vet2="veterinario 2"

  return (
    <>
      <h1 className='text-center'>Lista de reservas de turnos</h1>
      <hr></hr>
      <Container className='d-flex'>
        <Col className='w-50'>
          <h2>Veterinario 1</h2>
          { 
            ()=>{
              for(i=0;i<=7;i++){
                let contador=0
                turnos.map((turno)=>{
                  if (turno.veterinario.includes('veterinario 1')) {
                    if(turno.hora === hora[i]){
                      return <ReservaTurno turno={turno} setTurnos={setTurnos} key={turno._id} hora={hora[i]}></ReservaTurno>
                    }
                    ++contador
                  }
                })
                if(contador===0){
                  return (
                    <Link className="btn btn-primary" to={'/admin-turnos/agregar-turno/' + i + vet1}>
                      Agregar
                    </Link>
                  )
                }
              }
            }
          }
        </Col>
        <Col className='w-50'>
          <h2>Veterinario 2</h2>
          {
            turnos.map((turno) => {
              for(i=1;i<=turnos.length;i++){
                if (turno.veterinario.includes('veterinario 2')) {
                  return <ReservaTurno turno={turno} setTurnos={setTurnos} key={turno._id} hora={i}></ReservaTurno>
                }
              }
            })
          }
        </Col>
      </Container>


    </>
  );
};

export default AdminTurnos;
