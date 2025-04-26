import React from 'react';
import './Footer.css'; // We will create this CSS file next
import logo from '../assets/logo.png'; // Đường dẫn đến logo của bạn'; 
import social from '../assets/social.png'; // Đường dẫn đến biểu tượng mạng xã hội của bạn

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Liên Hệ</h3>
          <p>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
          <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 1, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
          <p>Điện thoại: <a href="tel:02838940390">028 38940 390</a> - <a href="tel:100">100</a></p>
          <p>Tuyển sinh: <a href="tel:02839851932">028 3985 1932</a> - <a href="tel:02838955858">028 3895 5858</a> - <a href="tel:02839851917">028 3985 1917</a></p>
          <p>Email: <a href="mailto:dhcn@iuh.edu.vn">dhcn@iuh.edu.vn</a></p>
        </div>

        <div className="footer-section">
          <h3>Hoạt Động Khác</h3>
          <ul>
            <li>Hoạt động phục vụ cộng đồng</li>
            <li>Sinh viên tình nguyện</li>
            <li>CLB/Đội/Nhóm sinh viên</li>
            <li>Kết nối doanh nghiệp</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Thông Tin Mở Rộng</h3>
          <ul>
            <li>Báo chí viết về IUH</li>
            <li>Khám phá IUH</li>
            <li>Kỹ năng mềm</li>
            <li>Bộ sưu tập</li>
            <li>Dịch vụ sinh viên</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Văn Bản Tiện Ích</h3>
          <ul>
            <li>Quy chế-Quy định-Quy trình</li>
            <li>Ba công khai</li>
            <li>Biểu mẫu đào tạo</li>
            <li>Quản lý khoa học</li>
            <li>Phản hồi</li>
          </ul>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-logo">
          <img src={logo} alt="IUH Logo" />
        </div>
        <div className="footer-stats">
          <p><i className="fas fa-users"></i> Số lượt truy cập : 288,835,376</p>
          <p><i className="fas fa-user"></i> Hôm nay : 21,729 - <i className="fas fa-eye"></i> Đang xem : 89</p>
        </div>
        <div className="footer-social">
          <span>Chia sẻ </span>
< img src={social} alt="Social Media" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
        <p>Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.</p>
      </div>
    </footer>
  );
}

export default Footer;