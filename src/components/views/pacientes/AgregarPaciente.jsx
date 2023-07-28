import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crear } from "../../helpers/queries";
import Swal from "sweetalert2";

const AgregarPaciente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (Nuevo) => {
    console.log(Nuevo);
//pedir a la api crear un producto
    crear(Nuevo).then((respuesta)=>{
      if(respuesta && respuesta.status === 201){
        Swal.fire('Paciente creado', `El paciente ${Nuevo.nombre} fue creado correctamente`, 'success');
        reset();
      }else{
        Swal.fire('Ocurrio un error', `El paciente ${Nuevo.nombre} no pudo ser creado, intente en unos minutos`, 'error');
      }
    })
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo paciente</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Pacientes*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Facundo"
            {...register("nombre", {
              required: "El nombre del paciente es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2",
              },
              maxLength: {
                value: 30,
                message: "La cantidad maxima de caracteres es de 30",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formApellido">
          <Form.Label>Apellido*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cajal"
            {...register("apellido", {
              required: "El apellido del paciente es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 ",
              },
              maxLength: {
                value: 30,
                message: "La cantidad maxima de caracteres es de 14 ",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.apellido?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="facundocajal177@gmail.com"
            {...register("email", {
              required: "El email es obligatorio",
              minLength: {
                value: 4,
                message: "La cantidad minima de caracteres es de 4 ",
              },
              maxLength: {
                value: 64,
                message: "La cantidad maxima de caracteres es de 64 ",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTeléfono">
          <Form.Label>teléfono*</Form.Label>
          <Form.Control
            type="number"
            placeholder="codigo de area (381) 667 1895"
            {...register("teléfono", {
              required: "El telefono es obligatorio",
              min: {
                value: 9,
                message: "El telefono es incorrecto",
              },
              max: {
                value: 15,
                message: "El telefono es incorrecto numeros maximos: 15",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.teléfono?.message}
          </Form.Text>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formDirección">
          <Form.Label>Dirección*</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            {...register("Dirección", {
              required: "Dirección obligatoria",
              min: {
                value: 5,
                message: "Direccion incorrecta",
              },
              max: {
                value: 50,
                message: "Direccion incorrecta",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.dirección?.message}
          </Form.Text>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formNombreMascota">
          <Form.Label>Nombre de la mascota*</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            {...register("nombreMascota", {
              required: "Nombre de la mascota obligatorio",
               min: {
                value: 2,
                message: "El Nombre de la mascota es incorrecto",
              },
              max: {
                value: 30,
                message: "El Nombre de la mascota es incorrecto ,30 caracteres maximos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreMascota?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEspecie">
          <Form.Label>Especie*</Form.Label>
          <Form.Control
            type="text"
            placeholder="perro , gato, reptil, roedor, etc"
            {...register("especie", {
              required: "especie obligatoria"
            })}
          />
          <Form.Text className="text-danger">
            {errors.especie?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRaza">
          <Form.Label>Raza*</Form.Label>
          <Form.Control
            type="text"
            placeholder="pitbul , siames, hámsterer, serpiente cascabel"
            {...register("raza", {
              required: "Raza obligatoria"
            })}
          />
          <Form.Text className="text-danger">
            {errors.raza?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default AgregarPaciente;
