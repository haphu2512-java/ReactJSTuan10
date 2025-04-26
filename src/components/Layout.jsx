import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import "./Layout.css";

function Layout() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <div className="main-content">
            {/* Nội dung chính */}
            <h5>THÔNG BÁO</h5>
            <ul>
              <li>Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025</li>
              <li>Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội...</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;