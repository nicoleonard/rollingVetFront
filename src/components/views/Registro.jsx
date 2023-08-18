import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { agregarUsuario } from "../helpers/queriesUsuarios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navegacion = useNavigate()

    const onSubmit = (nuevoUsuario) => {
        agregarUsuario(nuevoUsuario).then((respuesta) => {
            if (respuesta && respuesta.status === 201) {
                Swal.fire(`${respuesta.contenido.mensaje}`, `La cuenta ${nuevoUsuario.usuario} fue agregada al Registro de usuarios`, 'success');
                reset();
                navegacion("/login")
            } else {
                Swal.fire(`${respuesta.contenido.mensaje}`, `La cuenta ${nuevoUsuario.usuario} no pudo ser creada, quizás luego`, 'error');
            }
        });

    };

    return (
        <Container className="card ms-auto my-4 p-4 bg-light bg-opacity-75">
            <h1 className="display-4 mt-3">Registro de usuario</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Usuario de ejemplo"
                        {...register('usuario', { required: 'El usuario es necesario', pattern: { value: /[a-zA-Z][a-zA-Z0-9-_]{3,32}/, message: 'El nombre de usuario puede tener de 3 a 32 caracteres, debe empezar con una letra, puede contener "-" y "_"' } })}
                    />
                    <Form.Text className="text-danger">
                        {errors.usuario?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        {...register('clave', { required: 'La contraseña es necesaria', pattern: { value: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/, message: 'La contraseña puede tener de 8 a 64 caracteres y contiene una mezcla de mayusculas y minusculas, un numero y un caracter especial' } })}
                    />
                    <Form.Text className="text-danger">
                        {errors.clave?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ejemplo@ejemplo.com"
                        {...register('email', { required: 'El email es necesario', pattern: { value: /\S+@\S+\.\S+/, message: 'Se debe ingresar un email valido' } })}
                    />
                    <Form.Text className="text-danger">
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </Container>
    );
};

export default Registro;