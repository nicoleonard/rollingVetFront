// llamar la variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;

export const login = async (usuario)=>{
    try{
        //pedir a la api la lista de usuarios
        const respuesta = await fetch(URL_usuario,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': JSON.parse(sessionStorage.getItem('usuario')).token
            },
            body: JSON.stringify(usuario)
        });
        const usuarioLogueado = await respuesta.json();
        return usuarioLogueado;
    }catch(error){
        console.log(error)
    }
}



export const obtener = async () => {
    try {
      const respuesta = await fetch(URL_);
      const lista = await respuesta.json();
      return lista;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const obtenerUno = async (_id) => {
    try {
      const respuesta = await fetch(URL_ + "/" + _id);
      const paciente = await respuesta.json();
      return paciente;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const crear = async (producto) => {
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
