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


  

export default EditarPaciente;
