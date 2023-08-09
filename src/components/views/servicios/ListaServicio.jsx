import { Card } from "react-bootstrap"

const ListaServicio = ({ servicio }) => {

    return (
        <>
            <Card className="my-3 mx-2 p-0 text-center bg-light bg-opacity-75">
                <Card.Header>
                    <p className="text-truncate my-0 fw-bold">{servicio.titulo}</p>
                </Card.Header>
                <Card.Body>
                    <p className="text-wrap fst-italic">{servicio.descripcion}</p>

                </Card.Body>
                <Card.Footer>
                    <h6>Precio:</h6>
                    <p className="text-success fw-bold">${servicio.precio}</p>
                </Card.Footer>
            </Card>
        </>
    )

}

export default ListaServicio