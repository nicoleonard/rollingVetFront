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
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/6816845/pexels-photo-6816845.jpeg"
          className="carrouselInicio"
          text="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/6235653/pexels-photo-6235653.jpeg"
          className="carrouselInicio"
          text="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrouseInicio;
