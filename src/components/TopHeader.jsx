import { Container, Row, Col } from 'react-bootstrap';
import './TopHeader.css'; // nhớ import file CSS riêng
import flag1 from '../assets/flag1.png'
import flag2 from '../assets/flag2.png'


function TopHeader() {
  return (
    <div className="top-header">
      <Container fluid className="px-4">
        <Row className="py-1 align-items-center">
          <Col md={6} className="d-flex justify-content-start gap-3">
            <a href="#">🖥 E-OFFICE</a>
            <a href="#">📧 EMAIL</a>
            <a href="#">📚 THƯ VIỆN - THÔNG TIN</a>
          </Col>
          <Col md={6} className="d-flex justify-content-end gap-3 align-items-center">
            <a href="#">KẾT NỐI</a>
            <span>|</span>
            <a href="#">LIÊN HỆ</a>
            <img src={flag1} alt="VN" width="24" height="16" />
            <img src={flag2} alt="EN" width="24" height="16" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopHeader;
