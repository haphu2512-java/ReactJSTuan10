import TopHeader from './components/TopHeader';

import Banner from './components/Banner'; // đường dẫn tùy project của bạn
import LogoTitle from './components/LogoTitle';

function App() {
  return (
    <div>
      <TopHeader/>  {/* header bạn đã code */}
      <LogoTitle /> {/* thêm dòng này */}
      {/* <Banner />  */}
      {/* các thành phần khác */}
    </div>
  );
}


export  default App;