const URL_turnos = import.meta.env.VITE_API_TURNO

export const leerTurnos = async () => {
    try {
        const respuesta = await fetch(URL_turnos + "/turnos/");
        const turnos = await respuesta.json();
        return turnos;
    } catch (error) {
        console.log(error)
    }
}

export const leerTurno = async (id) => {
    try {
        const respuesta = await fetch(URL_turnos + "/turnos/" + id);
        const turno = await respuesta.json();
        return turno;
    } catch (error) {
        console.log(error)
    }
}

export const actualizarTurno = async (turno, id) => {
    try {
        const respuesta = await fetch(URL_turnos + "/turnos/" + id, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(turno) });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const inicializarTurno = async (id) => {
    try {
        const respuesta = await fetch(URL_turnos + "/" + id, { method: "PUT" });
        return { status: respuesta.status, contenido: await respuesta.json()}
    } catch (error) {
        console.log(error)
    }
}
export const borrarTurnos = async () => {
    try {
        const respuesta = await fetch(URL_turnos + "/turnos/", { method: "DELETE" });
        return { status: respuesta.status, contenido: await respuesta.json()}
    } catch (error) {
        console.log(error)
    }
}

export const inicializarTurnos = async (horarios, veterinarios) => {

    try{
        const respuesta = await fetch(URL_turnos + "/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({horarios,veterinarios}) })
        return { status: respuesta.status, contenido: await respuesta.json()}
    }catch(error){
        console.log(error)
    }
}