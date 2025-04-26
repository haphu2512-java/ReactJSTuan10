import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function NavbarMenu() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#262262" }} variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link href="#">GIỚI THIỆU</Nav.Link>
            <Nav.Link href="#">ĐÀO TẠO</Nav.Link>
            <NavDropdown title="TUYỂN SINH" id="tuyensinh-dropdown">
              <NavDropdown.Item href="#">Tuyển sinh Đại học</NavDropdown.Item>
              <NavDropdown.Item href="#">Chương trình liên kết</NavDropdown.Item>
              <NavDropdown.Item href="#">Tiến sĩ - Thạc sĩ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">NGHIÊN CỨU</Nav.Link>
            <Nav.Link href="#">SINH VIÊN</Nav.Link>
            <Nav.Link href="#">GIẢNG VIÊN</Nav.Link>
            <Nav.Link href="#">VĂN BẰNG</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
