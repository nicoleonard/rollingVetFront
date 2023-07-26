

const AdminPacientes = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((respuesta) => {
      if (respuesta) {
        setProductos(respuesta);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente realizar esta operacion en unos minutos",
          "error"
        );
      }
    });
  }, []);

  

export default AdminPacientes;
