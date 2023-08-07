import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { editarServicio, leerServicio } from "../../helpers/queriesServicios";
import Swal from "sweetalert2";


const EditarServicio = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const { id } = useParams();

    useEffect(() => {
        leerServicio(id).then((respuesta) => {
            setValue('titulo', respuesta.titulo)
            setValue('descripcion', respuesta.descripcion)
            setValue('precio', respuesta.precio)
        })
    }, [])

    const onSubmit = (servicioEditado) => {
        servicioEditado._id=id
        editarServicio(servicioEditado, id).then((respuesta) => {
            if (respuesta && respuesta.status === 200) {
                Swal.fire('Servicio editado', `El servicio de ${servicioEditado.titulo} fue modificado con exito`, 'success');
                reset();
            } else {
                Swal.fire('Oops... algo salio mal', `El servicio de ${servicioEditado.titulo} no se modificó. Quizás luego`, 'error');
            }
        });

    };

    return (
        <Container className="my-4 w-100 mx-auto card bg-opacity-75 bg-light px-5 mainSection">
            <h1 className="display-4 mt-5">Editando servicio</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Peluqueria, Nutricion, UTI..."
                        {...register("titulo", {
                            required: "El titulo del servicio no puede estar vacio", minLength: { value: 5, message: "El titulo del servicio debe tener al menos 5 caracteres" }, maxLength: { value: 100, message: "El nombre del servicio puede tener como maximo 100 caracteres" },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.titulo?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Corte de pelo, lavado de orejas..."
                        {...register("descripcion", {
                            required: "La descripcion del servicio no puede estar vacia", minLength: { value: 12, message: "La descripcion del servicio debe tener al menos 12 caracteres" }, maxLength: { value: 200, message: "La descripcion del servicio puede tener como maximo 300 caracteres" },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.descripcion?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        {...register("precio", {
                            required: "El precio del servicio no puede estar vacio",
                            min: {
                                value: 10,
                                message: "El precio minimo es de $10",
                            },
                            max: {
                                value: 50000,
                                message: "El precio maximo es de $50000",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.precio?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className="my-3">
                    Guardar
                </Button>
            </Form>
        </Container>
    );
};

export default EditarServicio;