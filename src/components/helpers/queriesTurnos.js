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

export const leerTurno = async (id) => {
    try {
        const respuesta = await fetch(URL_turnos + "/" + id);
        const servicio = await respuesta.json();
        return servicio;
    } catch (error) {
        console.log(error)
    }
}

export const agregarTurno = async (turno) => {
    try {
        const respuesta = await fetch(URL_turnos, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(turno) });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const editarTurno = async (turno, id) => {
    try {
        const respuesta = await fetch(URL_turnos + "/" + id, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(turno) });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const borrarTurno = async (id) => {
    try {
        const respuesta = await fetch(URL_turnos + "/" + id, { method: "DELETE" });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}