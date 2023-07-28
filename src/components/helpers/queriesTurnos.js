const URL_turnos = import.meta.env.VE_TURNO

export const leerTurnos = async () => {
    try {
        const respuesta = await fetch(URL_turnos);
        const turnos = await respuesta.json();
        return turnos;
    } catch (error) {
        console.log(error)
    }
}

/* export const agregarServicio = async (servicio) => {
    try {
        const respuesta = await fetch(URL_servicios, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(servicio) });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const editarServicio = async (servicio, id) => {
    try {
        const respuesta = await fetch(URL_servicios + "/" + id, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(servicio) });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const borrarServicio = async (id) => {
    try {
        const respuesta = await fetch(URL_servicios + "/" + id, { method: "DELETE" });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
} */