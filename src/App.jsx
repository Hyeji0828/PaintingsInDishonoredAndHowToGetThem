import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { BASE_URL } from './constants/config';
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from './components/ScrollToTopButton';
import AutoplayBackground from './components/AutoplayBg';
import {ByMission, ByType} from './pages/collection';
import { Dishonored2 } from './pages/games';

function App() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <ScrollToTop/>
        <AutoplayBackground interval = {5000}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dishonored2" element={<Dishonored2/>}/>
            <Route path="/dishonored2/by-mission" element={<ByMission/>}/>
            <Route path="/dishonored2/by-type" element={<ByType/>}/>
          </Routes>
        </AutoplayBackground>
      <ScrollToTopButton/>
    </BrowserRouter>
  );
}

export default App;
