// import Image from "react-bootstrap/Carousel";

function CarouselFade() {
  return (
    // <Carousel fade>
    //   <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/imageedit_2_9387127580.jpg"}
          alt="First slide"
        />
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default CarouselFade;
