import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate,useParams } from "react-router-dom";
import { editar, obtenerUno } from "../../helpers/queries";
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
    obtenerUno(id).then((respuesta)=>{
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
    editar(cargar,id).then(res=>{
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
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Paciente*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Facundo"
            {...register("nombre", {
              required: "El nombre del paciente es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 15,
                message: "La cantidad maxima de caracteres es de 15 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Apellido*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cajal"
            {...register("apellido", {
              required: "El precio del paciente es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 15,
                message: "La cantidad maxima de caracteres es de 15 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.apellido?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 381 663 1678"
            {...register("telefono", {
              required: "El precio del producto es obligatorio"
            })}
          />
          <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
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
                value: 14,
                message: "El telefono es incorrecto numeros maximos: 14",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.telefono?.message}
          </Form.Text>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Dirección*</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            {...register("Dirección", {
              required: "Dirección obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.dirección?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
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
                value: 14,
                message: "El telefono es incorrecto numeros maximos: 14",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.telefono?.message}
          </Form.Text>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Dirección*</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            {...register("Dirección", {
              required: "Dirección obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.dirección?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
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
                value: 14,
                message: "El telefono es incorrecto numeros maximos: 14",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.telefono?.message}
          </Form.Text>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Dirección*</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            {...register("Dirección", {
              required: "Dirección obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.dirección?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
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
                value: 14,
                message: "El telefono es incorrecto numeros maximos: 14",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.teléfono?.message}
          </Form.Text>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Dirección*</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            {...register("Dirección", {
              required: "Dirección obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.dirección?.message}
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Nombre de la mascota*</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            {...register("nombreMascota", {
              required: "Dirección obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreMascota?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Especie*</Form.Label>
          <Form.Control
            type="text"
            placeholder="perro , gato, reptil, roedor, etc"
            {...register("especie", {
              required: "especie obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.especie?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
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
