import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import {ByMission, ByType} from './pages/d2_collection';
import { BASE_URL } from './constants/config';
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/by-mission" element={<ByMission/>}/>
        <Route path="/by-type" element={<ByType/>}/>
      </Routes>
      <ScrollToTopButton/>
    </BrowserRouter>
  );
}

export default App;
