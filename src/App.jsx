import TopHeader from './components/TopHeader';

import Banner from './components/Banner'; // đường dẫn tùy project của bạn
import LogoTitle from './components/LogoTitle';
import { Nav } from 'react-bootstrap';
import NavbarMenu from './components/NavbarMenu';

function App() {
  return (
    <div>
      <TopHeader/>  {/* header bạn đã code */}
      <LogoTitle /> {/* thêm dòng này */}
      <NavbarMenu />

      {/* <Banner />  */}
      {/* các thành phần khác */}
    </div>
  );
}


export  default App;