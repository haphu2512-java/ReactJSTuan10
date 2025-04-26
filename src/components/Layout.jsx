import { Container, Row, Col } from "react-bootstrap";
import "./Layout.css";

function SideBar() {
  return (
    <div className="sidebar">
      <h5>CƠ CẤU TỔ CHỨC</h5>
      <ul>
        <li>LÃNH ĐẠO</li>
        <li>CÁC PHÒNG BAN</li>
        <li>CÁC KHOA</li>
        <li>CÁC VIỆN</li>
        <li>CÁC TRUNG TÂM</li>
        <li>CÁC PHÂN HIỆU</li>
        <li>ĐOÀN THỂ</li>
      </ul>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <Row>
        <Col md={6}>
          <h5>THÔNG BÁO</h5>
          <ul>
            <li>Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025</li>
            <li>Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội...</li>
          </ul>
        </Col>
        <Col md={6}>
          <h5>TUYỂN SINH</h5>
          <ul>
            <li>Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình...</li>
            <li>Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h5>TIN TỨC - SỰ KIỆN</h5>
          <ul>
            <li>AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp...</li>
            <li>Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong...</li>
          </ul>
        </Col>
        <Col md={6}>
          <h5>HỢP TÁC QUỐC TẾ</h5>
          <ul>
            <li>Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc...</li>
            <li>Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function Layout() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <MainContent />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;