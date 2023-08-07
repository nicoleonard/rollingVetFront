import Carousel from "react-bootstrap/Carousel";

const CarrouseInicio = () => {
  return (
    <Carousel className="mainSection">
      <Carousel.Item>
        <img
          src="https://www.consumidorglobal.com/uploads/s1/16/11/40/peluqueria-canina-pixabay.jpeg"
          className="carrouselInicio"
          text="First slide"
        />
        <Carousel.Caption className="text-light bg-success bg-opacity-75">
          <h3>
            <b>Seguridad</b>
          </h3>
          <p>
            Mantenemos los máximos niveles de seguridad para tu máscota.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/6816845/pexels-photo-6816845.jpeg"
          className="carrouselInicio"
          text="Second slide"
        />
        <Carousel.Caption className="text-light bg-success bg-opacity-75">
          <h3>
            <b>Profesionalismo</b>
          </h3>
          <p>
              Tenemos un equipo de profesionales capacitados listos para
              ayudarte.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/6235653/pexels-photo-6235653.jpeg"
          className="carrouselInicio"
          text="Third slide"
        />
        <Carousel.Caption className="text-light bg-success bg-opacity-75">
          <h3>
            <b>Compromiso</b>
          </h3>
          <p>
            Estamos comprometidos con el bienestar de tu mascota.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrouseInicio;
