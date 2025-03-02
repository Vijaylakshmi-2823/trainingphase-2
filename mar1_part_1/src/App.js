import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import Calc from './components/calc/calc';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from './components/menu/menu';
import Login from './components/login/login';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} /> 
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/thrid" element={<Third />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/login" element={<Login />} />
       </Routes>
    </BrowserRouter>
     {/* <First/>
     <Second/>
     <Third/>
     <Calc/> */}

    </div>
  );
}

export default App;
