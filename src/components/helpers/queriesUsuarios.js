const URL_usuarios = import.meta.env.VE_USUARIO;

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

export const leerUsuarios = async () => {
    try {
      const respuesta = await fetch(URL_usuarios);
      const usuario = await respuesta.json();
      return usuario;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const agregarUsuario = async (usuario) => {
    try {
      usuario.tipo = "usuario";
      const respuesta = await fetch(URL_usuarios, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const borrarUsuario = async (id) => {
    try {
      const respuesta = await fetch(URL_usuarios + "/" + id, {
        method: "DELETE",
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };