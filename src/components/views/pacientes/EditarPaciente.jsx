import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate,useParams } from "react-router-dom";
import { editarPaciente, obtenerUnPaciente } from "../../helpers/queriesPacientes";
import Swal from "sweetalert2";
const EditarPaciente = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();
  const {id} = useParams();
  const navegacion = useNavigate()
  useEffect(()=>{
    obtenerUnPaciente(id).then((respuesta)=>{
      setValue('nombre', respuesta.nombre)
      setValue('apellido', respuesta.apellido)
      setValue('email', respuesta.email)
      setValue('teléfono', respuesta.teléfono)
      setValue('dirección', respuesta.dirección)
      setValue('nombreMascota', respuesta.nombreMascota)
      setValue('especie', respuesta.especie)
      setValue('raza', respuesta.raza)
    })
  }, [])

  const onSubmit = (cargar) => {
    console.log(cargar);
    editarPaciente(cargar,id).then(res=>{
      if(res && res.status === 200){
        Swal.fire("Paciente editado","El paciente fue editado correctamente","success")
        navegacion('/administrador')
      }else{
        Swal.fire("Ocurrio un error","El paciente no pudo ser editado","error")
      }
    })
  };


  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar paciente</h1>
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
                value: 14,
                message: "La cantidad maxima de caracteres es de 14",
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
              required: "El precio del paciente es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 ",
              },
              maxLength: {
                value: 14,
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
              required: "El email es obligatorio"
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
              required: "El telefono es obligatorio"
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
              required: "Dirección obligatoria"
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
              required: "Nombre de la mascota obligatorio"
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
              required: "Raza obligatoria",
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

export default EditarPaciente;
