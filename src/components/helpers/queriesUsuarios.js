const URL_usuarios = import.meta.env.VITE_API_USUARIO;

export const login = async (usuario)=>{
    try{
        //pedir a la api la lista de usuarios
        const respuesta = await fetch(URL_usuarios,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        });
        const usuarioLogueado = await respuesta.json();
        return usuarioLogueado;
    }catch(error){
        console.log(error)
    }
}

export const leerUsuarios = async () => {
    try {
      const respuesta = await fetch(URL_usuarios + "/usuarios/");
      const usuario = await respuesta.json();
      return usuario;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const agregarUsuario = async (usuario) => {
    try {
      usuario.tipo = "usuario";
      const respuesta = await fetch(URL_usuarios + "/usuarios/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
      });
      return { status: respuesta.status, contenido: await respuesta.json()}
    } catch (error) {
      console.log(error);
    }
  };
  
  export const borrarUsuario = async (id) => {
    try {
      const respuesta = await fetch(URL_usuarios + "/usuarios/" + id, {
        method: "DELETE",
      });
      return { status: respuesta.status, contenido: await respuesta.json()};
    } catch (error) {
      console.log(error);
    }
  };