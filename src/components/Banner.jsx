import { Container, Row, Col } from "react-bootstrap";
import banner from "../assets/banner.png";

function Banner() {
  return (
    <div style={{ backgroundColor: "#e8edf2", paddingTop: "20px", paddingBottom: "20px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <img
              src={banner} // <-- bạn nhớ để đúng tên file ảnh nhé
              alt="Banner Đại học Công Nghiệp TP.HCM"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
