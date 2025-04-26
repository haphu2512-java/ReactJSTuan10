import TopHeader from './components/TopHeader';

import Banner from './components/Banner'; // đường dẫn tùy project của bạn
import LogoTitle from './components/LogoTitle';
import { Nav } from 'react-bootstrap';
import NavbarMenu from './components/NavbarMenu';
import Layout from './components/Layout';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopHeader/>  {/* header bạn đã code */}
      <LogoTitle /> {/* thêm dòng này */}
      <NavbarMenu />

      <Banner /> 

      <Layout /> {/* thêm dòng này */}

      <Content />

      <Footer />
    </div>
  );
}


export  default App;