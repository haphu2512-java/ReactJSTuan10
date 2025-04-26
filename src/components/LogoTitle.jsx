import { Container, Row, Col } from "react-bootstrap";
import logo  from "../assets/logo.png";


function LogoTitle() {
  return (
    <div style={{ backgroundColor: "#e8edf2", padding: "20px 0" }}>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <img src={logo} alt="Logo IUH" style={{ height: "80px" }} />
            <h3 style={{ fontWeight: "bold", marginTop: "10px" }}>BỘ CÔNG THƯƠNG</h3>
            <h2 style={{ fontWeight: "bold", color: "#262262" }}>
              ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
            </h2>
            <div style={{ color: "red", marginTop: "5px" }}>
              Đổi mới tư duy, làm giàu thêm tri thức - đời sống
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LogoTitle;
