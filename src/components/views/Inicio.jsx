import { Container, Row, Col } from "react-bootstrap";
import CardInicio from "./inicio/CardInicio";
import CarrouseInicio from "./inicio/CarrouseInicio";


const Inicio = () => {
  /* const [servicios,setServicios] = useState([])
  useEffect(()=>{
    obtenerProductos().then(res=>{
      setProductos(res)
    })
  },[]) */
  return (
    <>
    <CarrouseInicio></CarrouseInicio>
    <h2 className="text-center display-1">Productos a la venta</h2>
    <Container className="text-center my-5">
    <Row className="mb-5">
      <Col><CardInicio></CardInicio></Col>
      <Col><CardInicio></CardInicio></Col>
      <Col><CardInicio></CardInicio></Col>
    </Row>
    <Row>
    <Col><CardInicio></CardInicio></Col>
    <Col><CardInicio></CardInicio></Col>
    <Col><CardInicio></CardInicio></Col>
    </Row>
    </Container>
    </>
  );
};

export default Inicio;
