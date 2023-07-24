// llamar la variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;

export const login = ()=>{
    console.log(URL_usuario);
}