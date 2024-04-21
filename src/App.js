import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import WomenClothings from './components/womenClothings';
import MensClothing from './components/menClothings';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/womenClothing' element={<WomenClothings/>}></Route>
          <Route path='/mensClothing' element={<MensClothing/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
