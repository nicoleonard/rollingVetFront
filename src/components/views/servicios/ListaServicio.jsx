import { Card } from "react-bootstrap"

const ListaServicio = ({ servicio }) => {

    return (
        <>
            <Card className="px-1 my-2 text-center">
                <Card.Header>
                    <h4>Servicio:</h4>
                    <p className="text-truncate">{servicio.titulo}</p>
                </Card.Header>
                <Card.Body>
                    <h6>Descripcion:</h6>
                    <p className="text-wrap">{servicio.descripcion}</p>

                </Card.Body>
                <Card.Footer>
                    <h6>Precio:</h6>
                    <p>${servicio.precio}</p>
                </Card.Footer>
            </Card>
        </>
    )

}

export default ListaServicio