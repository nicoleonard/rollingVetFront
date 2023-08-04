


export const obtenerPacientes = async () => {
    try {
      const respuesta = await fetch(URL_);
      const lista = await respuesta.json();
      return lista;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const obtenerUnPaciente = async (_id) => {
    try {
      const respuesta = await fetch(URL_ + "/" + _id);
      const paciente = await respuesta.json();
      return paciente;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const crearPaciente = async (producto) => {
    try {
      const respuesta = await fetch(URL_productos, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": JSON.parse(sessionStorage.getItem('usuario')).token
        },
        body: JSON.stringify(producto),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  export const borrarPaciente = async (id) => {
    try {
      const respuesta = await fetch(URL_productos + "/" + id, {
        method: "DELETE",
        
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const editarPaciente = async (producto, id) => {
    try {
      const respuesta = await fetch(URL_productos + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-token": JSON.parse(sessionStorage.getItem('usuario')).token
        },
        body: JSON.stringify(producto),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };