import { Container, Row, Col, Button } from "react-bootstrap";
import "./Content.css";
import image1 from "../assets/banner.png";
import image2 from "../assets/flag1.png";
import image3 from "../assets/flag2.png";

function Content() {
  return (
    <div className="content-section">
      <Container>
        <Row>
          <Col md={4} className="content-item">
            <h5>PHÂN HIỆU QUẢNG NGÃI</h5>
            <img src={image1} alt="Phân hiệu Quảng Ngãi" className="content-image" />
          </Col>
          <Col md={4} className="content-item">
            <h5>CƠ SỞ THANH HÓA</h5>
            <img src={image2} alt="Cơ sở Thanh Hóa" className="content-image" />
          </Col>
          <Col md={4} className="content-item">
            <h5>VIDEO VÀ HÌNH ẢNH</h5>
            <img src={image3} alt="Video và Hình ảnh" className="content-image" />
            <Button variant="danger" className="view-all-button">Xem tất cả</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;