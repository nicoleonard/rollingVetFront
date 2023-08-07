import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../helpers/queriesUsuarios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({setUsuarioLogeado}) => {
  const { register, handleSubmit, formState: { errors}, reset } = useForm();
  const navegacion = useNavigate();

  const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;

  const onSubmit = (usuario) => {

    if (usuarioLogueado) {
        Swal.fire({
            title: 'Hay una sesion activa',
            text: `Está logeado como ${usuario.usuario}. Desea cerrar sesion?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2b9f89',
            cancelButtonColor: '#ff2255',
            confirmButtonText: 'Si, cerrar sesion.'
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                setUsuarioLogeado({})
                navegacion("/")
                Swal.fire(
                    'Sesion finalizada',
                    'Tu sesion se ha cerrado con exito.',
                    'success'
                )
            }
        })

    } else {

        login(usuario).then((respuesta) => {
            if (respuesta.usuario) {
                sessionStorage.setItem('usuario', JSON.stringify(respuesta))
                setUsuarioLogeado(respuesta);
                Swal.fire({
                  title: `${respuesta.mensaje}`,
                  text: `Bienvenido, ${respuesta.usuario}`,
                  icon: 'success',
                  confirmButtonColor: '#2b9f89',
                  confirmButtonText: 'Ok'
                })
                if (respuesta.tipo === "admin") {
                    navegacion("/admin-turnos")
                    return
                } else {
                  if(respuesta.tipo === "usuario"){
                    navegacion("/reserva-turnos")
                    return
                  }
                    navegacion("/")

                }

            } else {
                Swal.fire({
                    title: 'Algo salio mal...',
                    text: `${respuesta.mensaje}`,
                    icon: 'error',
                    confirmButtonColor: '#2b9f89',
                    confirmButtonText: 'Ok'
                  })
            }
        });
    }


}

  return (
    <Container className="mainSection">
      <Card className="card ms-auto my-4 p-4 bg-light bg-opacity-75">
        <Card.Header className="display-4 mt-3" as="h1">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un email"
               { ...register('email', {
                required:'El email es un dato obligatorio',
                pattern: {
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:'El email debe tener un formato valido (mail@dominio.com)'
                }
               })}
              />
              <Form.Text className="text-danger">
               { errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
               {
                ...register('clave',{
                  required: 'La clave es un dato obligatorio',
                  pattern:{ value: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/, message: 'La contraseña puede tener de 8 a 64 caracteres y contiene una mezcla de mayusculas y minusculas, un numero y un caracter especial' }
                })
               }
              />
             <Form.Text className="text-danger">
               { errors.clave?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;