import { Container, Carousel } from "react-bootstrap";
import banner1 from "../assets/banner.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

function Banner() {
  return (
    <div style={{ backgroundColor: "#e8edf2", paddingTop: "20px", paddingBottom: "20px" }}>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner1}
              alt="Slide 1"
              style={{ borderRadius: "8px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              alt="Slide 2"
              style={{ borderRadius: "8px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner3}
              alt="Slide 3"
              style={{ borderRadius: "8px" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Banner;
