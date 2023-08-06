const URL_pacientes = import.meta.env.VITE_API_PACIENTE



export const obtenerPacientes = async () => {
    try {
      const respuesta = await fetch(URL_pacientes);
      const lista = await respuesta.json();
      return lista;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const obtenerUnPaciente = async (id) => {
    try {
      const respuesta = await fetch(URL_pacientes + "/" + id);
      const paciente = await respuesta.json();
      return paciente;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const crearPaciente = async (paciente) => {
    try {
      const respuesta = await fetch(URL_pacientes, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": JSON.parse(sessionStorage.getItem('usuario')).token
        },
        body: JSON.stringify(paciente),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  export const borrarPaciente = async (id) => {
    try {
      const respuesta = await fetch(URL_pacientes + "/" + id, {
        method: "DELETE",
        
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const editarPaciente = async (paciente, id) => {
    try {
      const respuesta = await fetch(URL_pacientes + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-token": JSON.parse(sessionStorage.getItem('usuario')).token
        },
        body: JSON.stringify(paciente),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };