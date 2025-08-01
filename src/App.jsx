
import HomePageOne from './pages/HomePageOne';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import HomePageTwo from './pages/HomePageTwo'; // 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageOne />} />
      <Route path="/page-two" element={<HomePageTwo />} />
    </Routes>
    </BrowserRouter>
  );
};


export default App;